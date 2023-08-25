<script>
export let title;
export let content;
export let photos = [];
export let thumbnails = [];

import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';
</script>

<div>
	<p class="indent-5 text-4xl border-b border-gray-800 pb-3 mb-2">{title}</p>
	<div class="mx-5 markdown space-y-5">
		<div class="markdown">{@html content}</div>
		<LightboxGallery>
			<svelte:fragment slot="thumbnail">
				<div class="flex flex-wrap gap-5 justify-around fill-grid pt-5">
					{#each thumbnails as thumbnail}
						<GalleryThumbnail>
							<img class="max-h-[250px] object-contain" src={thumbnail} alt={title}>
						</GalleryThumbnail>
					{/each}
				</div>
			</svelte:fragment>

			{#each photos as photo}
				<GalleryImage>
					<img src={photo} alt={title}>
				</GalleryImage>
			{/each}
		</LightboxGallery>
	</div>
</div>
