import type { RequestHandler } from '@sveltejs/kit';
import type { ICommercialProject } from '$lib/typing';

export const get: RequestHandler = async () => {
	try {
		const body: Array<ICommercialProject> = [
			{
				name: 'Hackney Adult Social Care Frontend',
				link: 'https://social-care-care-packages-staging.hackney.gov.uk',
				image: '/hackney-social-care.png',
				languages: {
					HTML: true,
					Javascript: true,
					Scss: true
				},
				description: 'The frontend for managing social care package in Hackney Council.',
				involvements: [
					'Developed UI for multiple pages with **React** and **Next.js**.',
					'Set up CICD pipeline with **CircleCI** for testing, linting and deploying the application.'
				]
			},
			{
				name: 'Trusted Node',
				link: 'https://app.trustednode.io',
				image: '/trusted-node.png',
				languages: {
					Vue: true,
					Typescript: true,
					Sass: true
				},
				description: 'An application for staking and swapping TNODE.',
				involvements: ['Developed UI for the staking page with **Vue** and **Nuxt.js**.']
			},
			{
				name: 'Smart Go Academy Matchmaking portal',
				link: 'https://go.hk2.com',
				image: '/smartgo.png',
				languages: {
					Svelte: true,
					Typescript: true,
					CSS: true
				},
				description: 'An application for Go matchmaking, connected with OGS API.',
				involvements: [
					'Designed and developed the whole application single-handedly from scratch with **Svelte** and **SvelteKit**.'
				]
			},
			{
				name: 'Tecky Code',
				link: 'https://code.tecky.io',
				image: '/tecky-code.png',
				languages: {
					Typescript: true,
					HTML: true,
					Scss: true
				},
				description: 'A coding platform for learning codeing online.',
				involvements: [
					'Developed unit tests for service layer in its **Node.js** REST API',
					'Integrated the **React** frontend with the backend.'
				]
			},
			{
				name: 'Perfect Men',
				link: 'https://perfectmenbeauty.com/en/',
				image: '/perfect-men.png',
				languages: {
					Typescript: true,
					HTML: true,
					CSS: true
				},
				description: 'A branding website for Perfect Men.',
				involvements: [
					'Developed the whole website single-handedly with **React** and **Next.js** based on the design of UI designer.'
				]
			},
			{
				name: 'Ho Man',
				link: 'https://myhoman.com',
				image: '/homan.png',
				description: 'A branding website for Ho Man.',
				languages: {
					Nunjucks: true,
					CSS: true,
					Javascript: true
				},
				involvements: [
					'Developed the whole website single-handedly with **11.ty** based on the design of UI designer.'
				]
			},
			{
				name: 'Survivalist HK',
				link: 'https://survivalisthk.com/jyut/',
				image: '/survivalist.png',
				description: 'A survivalist blog with Hong Kongers as its target audience.',
				languages: {
					PHP: true,
					HTML: true,
					CSS: true,
					Javascript: true
				},
				involvements: [
					'Designed, developed and deployed the application single-handedly with **Wordpress**.'
				]
			},
			{
				name: 'How to study Cantonese',
				link: 'https://howtostudycantonese.com',
				image: '/howtostudycantonese.png',
				languages: {
					PHP: true,
					HTML: true,
					CSS: true,
					Javascript: true
				},
				description: 'An E-commerce website that sells Cantonese storybooks.',
				involvements: [
					'Designed, developed and deployed the application single-handedly from scratch with **Wordpress**.'
				]
			}
		];

		return {
			body
		};
	} catch (e) {
		return {
			status: 500
		};
	}
};
