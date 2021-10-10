import { writable } from 'svelte/store';
import type { INavItem, ISocialProfile } from '$lib/typing';

export const pageList = writable<Array<INavItem>>([]);
export const socialProfiles = writable<Array<ISocialProfile>>([]);
export const isMenuActive = writable<boolean>(false);
