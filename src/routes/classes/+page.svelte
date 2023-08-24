
<script>
import Heading from '$lib/Heading.svelte';
import Section from '$lib/Section.svelte';
import { i } from '@inlang/sdk-js';
</script>

<svelte:head>
	<title>{i("classes.title")} - Happy Island</title>
</svelte:head>

<Heading title={i("classes.title")} content={i("classes.description")} photo="/photos/classes/background.avif" />

<div class="container px-5 py-24 mx-auto">
	
	<Section
		title={i("classes.computer.title")}
		content={i("classes.computer.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("classes.language.title")}
		content={i("classes.language.content")}
		photos={["/photos/classes/language/background.avif"]}
		thumbnails={["/photos/classes/language/background-thumb.avif"]}
	/>
	

	<Section
		title={i("classes.arts_crafts.title")}
		content={i("classes.arts_crafts.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("classes.zumba.title")}
		content={i("classes.zumba.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("classes.aerobics.title")}
		content={i("classes.aerobics.content")}
		photos={[]}
		thumbnails={[]}
	/>
	
</div>
