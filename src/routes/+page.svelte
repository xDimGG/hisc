<script>
import { i } from '@inlang/sdk-js';

let { innerWidth } = window;
$: width = innerWidth < 600 ? 300 : 500;

</script>

<svelte:window bind:innerWidth />

<main class="mx-auto w-full max-w-screen-xl my-5">
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<div class="flex w-full mb-20 flex-wrap md:flex-row flex-col md:text-left text-center">
				<h1 class="sm:text-3xl text-2xl font-extrabold text-gray-900 lg:mb-0 mb-4">Happy Island Senior Center</h1>
				<p class="md:pl-6 text-2xl leading-relaxed">{i("slogan")}</p>
			</div>
			<div class="flex flex-wrap md:-m-2 -m-1 md:flex-row flex-col">
				<div class="flex flex-wrap md:w-1/2">
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300">
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301">
					</div>
					<div class="md:p-2 p-1 w-full">
						<img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360">
					</div>
				</div>
				<div class="flex flex-wrap md:w-1/2">
					<div class="md:p-2 p-1 w-full">
						<img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361">
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302">
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303">
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="text-gray-600 body-font">
		<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
			<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{i("home.sec1.title")}</h1>
				<p class="mb-8 leading-relaxed">{i("home.sec1.content")}</p>
			</div>
			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
			</div>
		</div>
	</section>

	<section class="text-gray-600 body-font">
		<div class="container mx-auto flex px-5 py-24 md:flex-row items-center flex-col-reverse">
			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 overflow-hidden mx-auto">
				<iframe title="555 Greeley Ave, Staten Island, NY 10306" class="flex mx-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6061.335800985154!2d-74.0999278651123!3d40.57101050000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c249b065ae2a01%3A0x53030ae851d71804!2sHappy%20Island%20Senior%20Center!5e0!3m2!1sen!2sus!4v1688757287062!5m2!1sen!2sus" {width} height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{i("home.sec2.title")}</h1>
				<p class="mb-8 leading-relaxed">{i("home.sec2.content")}</p>
			</div>
		</div>
	</section>


	<div class="grid grid-cols-1">
		<h1 class="text-3xl text-center mb-3">{i("home.follow_fb")}</h1>
		<iframe title="Our facebook page Happy Island Senior Center" class="mb-3 mx-auto" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FHappy-Island-Senior-Center-100063640447417%2F&tabs=timeline&width={width}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=617662153119696" {width} height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
	</div>
</main>
