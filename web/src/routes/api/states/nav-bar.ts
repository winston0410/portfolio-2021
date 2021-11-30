import type { RequestHandler } from '@sveltejs/kit';

const pages = [
	{ name: 'Opensource', url: '/pages/opensource' },
	{ name: 'Curriculum vitae', url: '/pages/cv' },
	//  { name: 'Blog', url: '/blog' }
];

export const get: RequestHandler = async () => {
	return {
		body: pages
	};
}
