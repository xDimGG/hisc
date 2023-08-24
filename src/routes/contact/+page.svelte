<script>
import { page } from '$app/stores';
import { i } from '@inlang/sdk-js';
</script>

<svelte:head>
	<title>{i("contact.title")} - Happy Island</title>
</svelte:head>

<section class="bg-white">
  <div class="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">{i("contact.title")}</h2>
		<p class="mb-8 lg:mb-8 font-light text-center text-gray-500 sm:text-xl">{i("contact.greet")}</p>
		<form action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
			<input type="hidden" name="access_key" value="40b9a6ba-511e-417d-ba7b-0210586d9b52">
  		<input type="hidden" name="redirect" value={`${$page.url.origin}/contact/success`}>

			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900">{i("contact.form.email")}</label>
				<input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="email@provider.com" required>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-gray-900">{i("contact.form.subject")}</label>
				<input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder={i("contact.form.email_placeholder")} required>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900">{i("contact.form.message")}</label>
				<textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder={i("contact.form.message_placeholder")} required></textarea>
			</div>
			<div class="w-100 flex justify-center">
				<button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">{i("contact.form.send")}</button>
			</div>
		</form>
		<div class="flex flex-col md:flex-row mt-5 md:mt-8 md:pt-8 border-t border-gray-200">
			<div class="w-full flex flex-row md:flex-col py-2 md:py-0 items-center">
				<svg class="mx-auto w-14 md:w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="location-pin"><path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"></path></svg>
				<span class="sr-only">{i("contact.address")}</span>
				<p class="text-sm md:text-md text-center w-full">555 Greeley Avenue,<br>Staten Island, NY 10306</p>
			</div>
			<div class="w-full flex flex-row md:flex-col py-2 md:py-0 items-center">
				<svg class="mx-auto w-14 md:w-20" xmlns="http://www.w3.org/2000/svg" id="phone" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path d="M20.666 27.021a5.907 5.907 0 0 1-2.934-.779l-.126-.071A39.137 39.137 0 0 1 3.491 12.355l-.657-1.095a5.849 5.849 0 0 1 .881-7.153l1.309-1.309c1.1-1.1 2.889-1.1 3.988 0l2.884 2.884a2.83 2.83 0 0 1 .464 3.378l-1.084 1.925a.213.213 0 0 0 .035.255l6.421 6.421a.216.216 0 0 0 .257.034l1.922-1.083.001-.001a2.832 2.832 0 0 1 3.378.464l2.885 2.886c1.1 1.1 1.1 2.889 0 3.988l-1.367 1.366a5.848 5.848 0 0 1-4.142 1.706zM7.018 3.973c-.21 0-.42.08-.58.24L5.129 5.521a3.85 3.85 0 0 0-.58 4.708l.657 1.095a37.13 37.13 0 0 0 13.389 13.107l.126.071c1.526.873 3.446.626 4.672-.602l1.367-1.366a.82.82 0 0 0 0-1.16l-2.885-2.886a.823.823 0 0 0-.983-.134l-1.922 1.083a2.222 2.222 0 0 1-2.652-.363l-6.421-6.421a2.218 2.218 0 0 1-.363-2.651l1.084-1.924a.824.824 0 0 0-.135-.982L7.598 4.213a.818.818 0 0 0-.58-.24z"></path></svg>
				<span class="sr-only">{i("contact.phone")}</span>
				<p class="text-sm md:text-md text-center w-full">
					<a class="underline" href="tel:718-980-0240">718-980-0240</a>
					<br>
					<a class="underline" href="tel:718-980-0241">718-980-0241</a>
				</p>
			</div>
			<div class="w-full flex flex-row md:flex-col py-2 md:py-0 items-center">
				<svg class="mx-auto w-14 md:w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
				<span class="sr-only">{i("contact.email")}</span>
				<a href="mailto:happyislandny@gmail.com" class="text-sm md:text-md text-center w-full underline">happyislandny@gmail.com</a>
			</div>
		</div>
  </div>
</section>