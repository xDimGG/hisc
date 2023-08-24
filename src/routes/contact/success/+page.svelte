<script>
import { i } from '@inlang/sdk-js';
</script>

<section class="bg-white">
	<div class="flex flex-col justify-center items-center h-[70vh] space-y-3">
		<svg class="fill-green-600" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="check-mark"><g data-name="Layer 2"><path d="M24 0a24 24 0 1 0 24 24A24 24 0 0 0 24 0Zm0 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z"></path><path d="m20 29.17-6.59-6.58-2.82 2.82L20 34.83l17.41-17.42-2.82-2.82L20 29.17z"></path></g></svg>
		<p class="text-green-600 text-2xl">{i("contact.success.title")}</p>
		<p>{i("contact.success.content")}</p>
	</div>
</section>