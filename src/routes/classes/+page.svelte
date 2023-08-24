<script>
import Heading from '$lib/Heading.svelte';
import Section from '$lib/Section.svelte';
import { i } from '@inlang/sdk-js';

const photos = ['https://dummyimage.com/1200x500', 'https://dummyimage.com/500x1200', 'https://dummyimage.com/300x300', 'https://dummyimage.com/1200x1200'];
</script>

<Heading title={i("classes.title")} content={i("classes.description")} photo="/photos/classes/background.avif" />

<div class="container px-5 py-24 mx-auto">
	<Section
		title={i("classes.language.title")}
		content={i("classes.language.content")}
		{photos}
		thumbnails={photos}
	/>
</div>
