<script>
export let title;
export let content;
export let photo;
</script>

<div class="w-full min-h-[50vh] max-h-[50vh] relative">
	<div class="w-full h-full bg-cover bg-center filter blur-sm brightness-150" style="background-image: url('{photo}')"></div>
	<div class="px-[5vw] text-center w-full h-full absolute left-0 top-0 flex flex-col justify-center items-center">
		<p class="text-5xl mb-5 font-semibold text-black">{title}</p>
		<p class="text-2xl text-black md:max-w-[70%]">{content}</p>
	</div>
</div>
