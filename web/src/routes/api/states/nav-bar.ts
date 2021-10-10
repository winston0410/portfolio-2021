import type { EndpointOutput } from '@sveltejs/kit';
import type { INavItem } from '$lib/typing';

const pages = [
	{ name: 'opensource', url: '/pages/opensource' },
	{ name: 'My curriculum vitae', url: '/pages/cv' }
];

export async function get(): Promise<EndpointOutput<Array<INavItem>>> {
	return {
		body: pages
	};
}
