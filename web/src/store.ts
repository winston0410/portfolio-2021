import { writable } from 'svelte/store';

export const pageList = writable([]);
export const socialProfiles = writable([]);
export const isMenuActive = writable<boolean>(false);
