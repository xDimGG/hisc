import { writable } from 'svelte/store';

export const language = writable('en');
export const languageSet = typeof localStorage === 'undefined' ? false : localStorage.getItem('language') === null;

if (typeof localStorage !== 'undefined') {
	language.set(localStorage.getItem('language') ?? 'en');
	language.subscribe(val => localStorage.setItem('language', val));
}
