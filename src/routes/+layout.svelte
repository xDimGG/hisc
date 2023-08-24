<script>
import '../app.postcss';
import { language as languageStore, languageSet } from '../stores/language';
import { page } from '$app/stores';
import { i, switchLanguage } from '@inlang/sdk-js';
import { navigating } from '$app/stores';

let selectOpen = languageSet;

const LANGUAGES = {
	'en': {
		name: 'English',
		icon: 'https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/US.svg',
	},
	'ru': {
		name: 'Русский',
		icon: 'https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/RU.svg',
	},
	'sq': {
		name: 'Shqip',
		icon: 'https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/AL.svg',
	},
	'es': {
		name: 'Español',
		icon: 'https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/ES.svg',
	},
	'ar': {
		name: 'العربية',
		icon: 'https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/SA.svg',
	},
};

const PAGES = [
  ['home', '/'],
  ['services', '/services'],
  ['activities', '/activities'],
  ['classes', '/classes'],
  ['contact', '/contact'],
];

let navOpen = false;

$: if ($navigating) navOpen = false;

const select = (lang) => {
	selectOpen = false;
	languageStore.set(lang);
  console.log(`changed language to ${lang}`);
  switchLanguage(lang);
};

$: path = $page.url.pathname;
</script>

<svelte:window on:keydown={e => e.key === 'Escape' && (selectOpen = false)} />

{#if selectOpen}
<div class="fixed w-screen h-screen z-10 bg-blue-400">
  <div class="flex flex-col justify-center items-center h-full">
    <div>
      {#each Object.entries(LANGUAGES) as [code, { name, icon }]}
        <div
          class="flex gap-2 p-1 hover:cursor-pointer items-center"
          on:click={() => select(code)}
          on:keypress={() => select(code)}
          role="button"
          tabindex="0"
        >
          <img src="{icon}" width="50" height="50" alt={name} />
          <span class="text-white text-3xl">{name}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
{:else}
<div class="flex flex-col h-screen">

<nav class="bg-blue-700 {navOpen ? 'open' : 'closed'}" style={`--max-height-var: ${PAGES.length * 44 + 16}px`}>
  <div class="mx-auto max-w-7xl px-2 py-0 sm:py-0 sm:px-6 lg:px-8">
    <div class="relative grid grid-cols-header">
      <div class="flex items-center sm:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
					on:click={() => navOpen = !navOpen}
        >
          <span class="sr-only">{i("tooltip.open_main_menu")}</span>

          <svg
            class="{navOpen ? 'hidden' : 'block'} h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            class="{navOpen ? 'block' : 'hidden'} h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex items-center content-center py-0">
        <img class="mx-auto block h-12 w-auto lg:hidden" src="/logo.png" alt="HISC" />
        <img class="hidden h-8 lg:h-16 w-auto lg:block" src="/logo.png" alt="HISC" />
      </div>
      <div class="hidden sm:flex flex-1 items-center justify-center sm:items-stretch">
        <div class="sm:ml-6 sm:flex py-2">
          <div class="flex space-x-4 self-center">
            {#each PAGES as [name, href]}
              <a
                {href}
                class={`${path === href ? 'active' : 'inactive'} rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap`}
                aria-current="page">{i(`${name}.title`)}</a
              >
            {/each}
          </div>
        </div>
      </div>
      <div class="inset-y-0 flex items-center justify-end cursor-pointer"  on:keypress={() => selectOpen = true}  on:click={() => selectOpen = true} role="button" tabindex="0">
        <img src={LANGUAGES[$languageStore].icon} alt={LANGUAGES[$languageStore].name} width="40" height="40" />
        <span class="sr-only">{i("tooltip.change_language")}</span>
      </div>
    </div>
  </div>

  <div class="sm:hidden mobile-menu overflow-hidden">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {#each PAGES as [name, href]}
        <a
          {href}
          class={`${path === href ? 'active' : 'inactive'} block rounded-md px-3 py-2 text-base font-medium`}
          aria-current="page">{i(`${name}.title`)}</a
        >
      {/each}
    </div>
  </div>
</nav>

<slot />

<!-- fill in the gap between the footer and bottom of screen -->
<div class="flex-grow"></div>

<footer class="bg-blue-800">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center flex-wrap lg:flex-nowrap">
          <img
            src="/logo.png"
            class="w-full sm:w-auto sm:h-16 mr-3"
            alt="Happy Island Senior Center Logo"
          />
          <span
            class="self-center text-2xl font-semibold text-white"
            >Happy Island Senior Center</span
          >
        </a>
      </div>
      <div class="grid gap-8 sm:gap-6 grid-cols-1">
        <!-- <div></div> -->
        <!-- <div></div> -->
        <div class="min-w-[250px]">
          <h2
            class="mb-6 text-sm font-semibold uppercase text-white"
          >
            {i("footer.operating_hours")}
          </h2>
          <table
            class="text-gray-300 font-light border-none"
            cellspacing="0"
            cellpadding="0"
          >
            <tr>
              <td>Monday</td>
              <td>8:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>8:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td class="pr-3">Wednesday</td>
              <td>8:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>8:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>8:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>8:00 AM - 2:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>8:00 AM - 2:00 PM</td>
            </tr>
          </table>
        </div>
        <!-- <div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
					<ul class="text-gray-500 dark:text-gray-200 font-medium">
						<li class="mb-4">
							<a href="#" class="hover:underline">Privacy Policy</a>
						</li>
						<li>
							<a href="#" class="hover:underline">Terms &amp; Conditions</a>
						</li>
					</ul>
				</div> -->
      </div>
    </div>
    <hr class="my-6 sm:mx-auto border-gray-300 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm sm:text-center text-gray-400"
        >&#xa9; 2023 <a
          href="/"
          class="hover:underline">Happy Island Senior Center</a
        >. All Rights Reserved.
      </span>
      <div class="flex mt-4 sm:space-x-4 sm:justify-center sm:items-center sm:mt-0 flex-col sm:flex-row">
        <a
          href="tel:718-980-0240"
          class="text-gray-400 hover:text-white flex items-center"
        >
          <svg
            class="w-4 h-4 mr-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 29 29"
            xml:space="preserve"
          >
            <path
              d="M20.666 27.021a5.907 5.907 0 0 1-2.934-.779l-.126-.071A39.137 39.137 0 0 1 3.491 12.355l-.657-1.095a5.849 5.849 0 0 1 .881-7.153l1.309-1.309c1.1-1.1 2.889-1.1 3.988 0l2.884 2.884a2.83 2.83 0 0 1 .464 3.378l-1.084 1.925a.213.213 0 0 0 .035.255l6.421 6.421a.216.216 0 0 0 .257.034l1.922-1.083.001-.001a2.832 2.832 0 0 1 3.378.464l2.885 2.886c1.1 1.1 1.1 2.889 0 3.988l-1.367 1.366a5.848 5.848 0 0 1-4.142 1.706zM7.018 3.973c-.21 0-.42.08-.58.24L5.129 5.521a3.85 3.85 0 0 0-.58 4.708l.657 1.095a37.13 37.13 0 0 0 13.389 13.107l.126.071c1.526.873 3.446.626 4.672-.602l1.367-1.366a.82.82 0 0 0 0-1.16l-2.885-2.886a.823.823 0 0 0-.983-.134l-1.922 1.083a2.222 2.222 0 0 1-2.652-.363l-6.421-6.421a2.218 2.218 0 0 1-.363-2.651l1.084-1.924a.824.824 0 0 0-.135-.982L7.598 4.213a.818.818 0 0 0-.58-.24z"
            />
          </svg>
          <span class="sr-only">{i("contact.phone")}</span>
          <span
            href="tel:718-980-0240"
            class="text-sm align-middle"
          >(718-980-0240)</span>
        </a>
        <a
          href="mailto:happyislandny.com"
          class="text-gray-400 hover:text-white flex items-center"
        >
          <svg
            class="w-4 h-4 mr-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="4 1 16 22"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
          </svg>
          <span class="sr-only">{i("contact.email")}</span>
          <span
            href="tel:718-980-0240"
            class="text-sm align-middle"
          >(happyislandny@gmail.com)</span>
        </a>
        <a
          href="https://www.facebook.com/p/Happy-Island-Senior-Center-100063640447417/"
          class="text-gray-400 hover:text-white"
          target="_blank"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fill-rule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="sr-only">{i("contact.facebook")}</span>
        </a>
      </div>
    </div>
  </div>
</footer>

</div>
{/if}

<style>
.mobile-menu {
	transition: max-height ease-out 300ms;
}

nav.open > .mobile-menu {
	/* Done manually */
	max-height: var(--max-height-var);
}

nav.closed > .mobile-menu {
	max-height: 0;
}
</style>
