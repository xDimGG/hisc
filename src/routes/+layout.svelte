<script>
import '../app.postcss';
import { language, languageSet } from '../stores/language';
import { page } from '$app/stores';
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
};

const PAGES = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Activities', '/activities'],
  ['Classes', '/classes'],
  ['Contact Us', '/contact'],
];

let navOpen = false;

const select = (lang) => {
	selectOpen = false;
	language.set(lang);
};

$: path = $page.url.pathname;
</script>

{#if selectOpen}
  <div class="fixed w-screen h-screen z-10 bg-blue-400">
    <div class="flex flex-col justify-center items-center h-full">
      {#each Object.entries(LANGUAGES) as [code, { name, icon }]}
        <div class="flex gap-2 p-1 hover:cursor-pointer items-center" on:click={() => select(code)}>
          <img src="{icon}" width="50" height="50" alt={name} />
          <span class="text-white text-3xl">{name}</span>
        </div>
      {/each}
    </div>
  </div>
{/if}

<nav class="bg-blue-700 {navOpen ? 'open' : 'closed'}" style={`--max-height-var: ${PAGES.length * 44 + 16}px`}>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
					on:click={() => navOpen = !navOpen}
        >
          <span class="sr-only">Open main menu</span>
          <!--
						Icon when menu is closed.

						Menu open: "hidden", Menu closed: "block"
					-->
          <svg
            class="block h-6 w-6"
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
          <!--
						Icon when menu is open.

						Menu open: "block", Menu closed: "hidden"
					-->
          <svg
            class="hidden h-6 w-6"
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
      <div class="flex flex-1 items-center justify-center sm:items-stretch">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto lg:hidden" src="/logo.jpeg" alt="HISC" />
          <img class="hidden h-8 w-auto lg:block" src="/logo.jpeg" alt="HISC" />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each PAGES as [name, href]}
              <a
                {href}
                class={`${path === href ? 'active' : 'inactive'} rounded-md px-3 py-2 text-sm font-medium`}
                aria-current="page">{name}</a
              >
            {/each}
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center cursor-pointer">
        <img src={LANGUAGES[$language].icon} alt={LANGUAGES[$language].name} width="40" height="40" on:click={() => selectOpen = true} />
        <span class="sr-only">Change language</span>
      </div>
    </div>
  </div>

  <div class="sm:hidden mobile-menu overflow-hidden">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {#each PAGES as [name, href]}
        <a
          {href}
          class={`${path === href ? 'active' : 'inactive'} block rounded-md px-3 py-2 text-base font-medium`}
          aria-current="page">{name}</a
        >
      {/each}
    </div>
  </div>
</nav>

<slot />

<footer class="bg-blue-800">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img
            src="/logo.jpeg"
            class="h-8 mr-3"
            alt="Happy Island Senior Center Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Happy Island Senior Center</span
          >
        </a>
      </div>
      <div class="grid gap-8 sm:gap-6 grid-cols-1 md:grid-cols-3">
        <div></div>
        <div></div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Operating Hours
          </h2>
          <table
            class="dark:text-gray-300 font-light border-none"
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
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >&#xa9; 2023 <a
          href="https://Happy Island Senior Center.com/"
          class="hover:underline">Happy Island Senior Center</a
        >. All Rights Reserved.
      </span>
      <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <a
          href="https://www.facebook.com/p/Happy-Island-Senior-Center-100063640447417/"
          class="text-gray-400 hover:text-gray-50 dark:hover:text-white"
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
          <span class="sr-only">Facebook page</span>
        </a>
        <a
          href="tel:718-980-0240"
          class="text-gray-400 hover:text-gray-50 dark:hover:text-white"
        >
          <svg
            class="w-4 h-4"
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
          <span class="sr-only">Phone number</span>
        </a>
      </div>
    </div>
  </div>
</footer>

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
