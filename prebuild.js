import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// These three pages are practically the same
const pages = ['services', 'activities', 'classes'];
const exclude = ['title', 'description'];

const keys = Object.keys(JSON.parse(fs.readFileSync('./translations/en.json')));

const ROUTES = path.join(__dirname, 'src', 'routes');
const PHOTOS = path.join(__dirname, 'static', 'photos');

const generateSvelte = (page, background, sections, photos, thumbnails) => `
<script>
import Heading from '$lib/Heading.svelte';
import Section from '$lib/Section.svelte';
import { i } from '@inlang/sdk-js';
</script>

<Heading title={i("${page}.title")} content={i("${page}.description")} photo="${background}" />

<div class="container px-5 py-24 mx-auto">
	${sections.map(section => `
	<Section
		title={i("${page}.${section}.title")}
		content={i("${page}.${section}.content")}
		photos={${JSON.stringify(photos)}}
		thumbnails={${JSON.stringify(thumbnails)}}
	/>
	`)}
</div>
`;

for (const page of pages) {
	// get just section names
	let sections = keys.filter(k => k.startsWith(`${page}.`)).map(k => k.split('.')[1]);
	// remove duplicates and excluded sections
	sections = [...new Set(sections)].filter(s => !exclude.includes(s))
	console.log(page, sections);
	sharp
}
