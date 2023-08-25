/**
What this script does:
- Reads the localization file to find page sections
- Creates thumbnail files for all pages that need it
- Auto-generates svelte files for all pages in the pages array with references to the generate thumbnails
*/

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// https://stackoverflow.com/a/50052194
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = ['services', 'activities', 'classes'];
const exclude = ['title', 'description'];

const MAX_HEIGHT = 250; // max height of thumbnail in pixels

const en = JSON.parse(fs.readFileSync('./translations/en.json'));

const ROUTES = path.join(__dirname, 'src', 'routes');
const PHOTOS = path.join(__dirname, 'static', 'photos');

// sections takes an array of objects with properties name, photos, thumbnails
const generateSvelte = (page, background, sections) => `
<script>
import Heading from '$lib/Heading.svelte';
import Section from '$lib/Section.svelte';
import { i } from '@inlang/sdk-js';
</script>

<svelte:head>
	<title>{i("${page}.title")} - Happy Island</title>
</svelte:head>

<Heading title={i("${page}.title")} content={i("${page}.description")} photo="${background}" />

<div class="container px-5 py-24 mx-auto space-y-16">
	${sections.map(({ name, photos, thumbnails }) => `
	<Section
		title={i("${page}.${name}.title")}
		content={i("${page}.${name}.content")}
		photos={${JSON.stringify(photos)}}
		thumbnails={${JSON.stringify(thumbnails)}}
	/>
	`).join('\n')}
</div>
`;

// creates thumbnail from image file and returns the name of the new file
const createThumbFrom = async (dir, file, thumbName, thumbWidth, thumbHeight) => {
	// ignore thumbnail files
	if (file.includes('-thumb')) return;

	const f = sharp(path.join(dir, file));

	if (!thumbName || !thumbWidth || !thumbHeight) {
		const { width, height } = await f.metadata();
		const { name, ext } = path.parse(file);
		thumbName = `${name}-thumb${ext}`;
		thumbHeight = Math.min(height, MAX_HEIGHT);
		thumbWidth = Math.ceil((width / height) * thumbHeight);
	}

	// don't rerender if it exists already
	if (fs.existsSync(path.join(dir, thumbName))) return thumbName;

	await f.resize(thumbWidth, thumbHeight).toFile(path.join(dir, thumbName));

	return thumbName;
};

// create thumbnails for homepage
for (const file of fs.readdirSync(path.join(PHOTOS, 'homepage'))) {
	const { name, ext } = path.parse(file);

	// small thumbnails
	await createThumbFrom(path.join(PHOTOS, 'homepage'), file, `${name}-thumb-sm${ext}`, 298, 179);

	// medium thumbnails
	await createThumbFrom(path.join(PHOTOS, 'homepage'), file, `${name}-thumb-md${ext}`, 612, 368);
}

for (const page of pages) {
	// get just section names
	const sections = Object.keys(en[page] || {}).filter(s => !exclude.includes(s));
	const sectionData = [];

	// create thumbnails
	for (const section of sections) {
		const photoURLs = [];
		const thumbnailURLs = [];

		const dir = path.join(PHOTOS, page, section);
		let files = [];

		try {
			files = fs.readdirSync(dir);
		} catch (err) {
			if (err.code !== 'ENOENT') throw err;
		}

		for (const file of files) {
			const thumbName = await createThumbFrom(dir, file);
			if (!thumbName) continue;

			photoURLs.push(`/photos/${page}/${section}/${file}`);
			thumbnailURLs.push(`/photos/${page}/${section}/${thumbName}`);
		}

		sectionData.push({ name: section, photos: photoURLs, thumbnails: thumbnailURLs });
	}

	// find background file name
	const bg = fs.readdirSync(path.join(PHOTOS, page)).find(e => e.includes('background'));

	fs.writeFileSync(path.join(ROUTES, page, '+page.svelte'), generateSvelte(page, `/photos/${page}/${bg}`, sectionData));
}
