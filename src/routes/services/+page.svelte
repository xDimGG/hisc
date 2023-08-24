
<script>
import Heading from '$lib/Heading.svelte';
import Section from '$lib/Section.svelte';
import { i } from '@inlang/sdk-js';
</script>

<svelte:head>
	<title>{i("services.title")} - Happy Island</title>
</svelte:head>

<Heading title={i("services.title")} content={i("services.description")} photo="/photos/services/undefined" />

<div class="container px-5 py-24 mx-auto">
	
	<Section
		title={i("services.shuttle.title")}
		content={i("services.shuttle.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("services.meals.title")}
		content={i("services.meals.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("services.barber_beauty.title")}
		content={i("services.barber_beauty.content")}
		photos={[]}
		thumbnails={[]}
	/>
	

	<Section
		title={i("services.gym.title")}
		content={i("services.gym.content")}
		photos={[]}
		thumbnails={[]}
	/>
	
</div>
