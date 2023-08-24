<script>
import { i } from '@inlang/sdk-js';

let { innerWidth } = window;
$: width = Math.max(Math.min(screen.width, innerWidth, 550) - 50, 180);

</script>

<svelte:window bind:innerWidth />

<main class="mx-auto w-full max-w-screen-xl my-5">
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<h1 class="sm:text-3xl text-2xl font-extrabold text-gray-900 mb-4">Happy Island Senior Center &mdash; {i("slogan")}</h1>
			<p class="text-2xl font-bold mb-10">{i("home.medicaid")}</p>
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

	<!-- <section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto">
			<h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
			<div class="flex flex-wrap -m-4">
				<div class="p-4 md:w-1/2 w-full">
					<div class="h-full bg-gray-100 p-8 rounded">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
						<a class="inline-flex items-center">
							<img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
							<span class="flex-grow flex flex-col pl-4">
								<span class="title-font font-medium text-gray-900">Holden Caulfield</span>
								<span class="text-gray-500 text-sm">UI DEVELOPER</span>
							</span>
						</a>
					</div>
				</div>
				<div class="p-4 md:w-1/2 w-full">
					<div class="h-full bg-gray-100 p-8 rounded">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
						<a class="inline-flex items-center">
							<img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
							<span class="flex-grow flex flex-col pl-4">
								<span class="title-font font-medium text-gray-900">Alper Kamu</span>
								<span class="text-gray-500 text-sm">DESIGNER</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<div class="grid grid-cols-1">
		<h1 class="text-3xl text-center mb-3">{i("home.follow_fb")}</h1>
		<iframe title="Our facebook page Happy Island Senior Center" class="mb-3 mx-auto" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FHappy-Island-Senior-Center-100063640447417%2F&tabs=timeline&width={width}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=617662153119696" {width} height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
	</div>
</main>
