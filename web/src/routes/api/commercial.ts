import type { RequestHandler } from '@sveltejs/kit';
import type { ICommercialProject } from '$lib/typing'

export const get: RequestHandler = async () => {
	try {
		const body: Array<ICommercialProject> = [
			{
				name: 'Trusted Node',
				link: 'https://app.trustednode.io',
                image: "",
				languages: [],
                description: "An application for staking and swapping TNODE.",
				involvement: 'Developed the UI and functionality for the staking page with <strong>Vue</strong> and <strong>Nuxt.js</strong>.'
			},
			{
				name: 'Tecky Code',
				link: 'https://code.tecky.io',
                image: "",
				languages: [],
                description: "A coding platform for learning codeing online.",
				involvement: 'Developed unit tests for service layer in its <strong>Node.js</strong> backend and integrated its <strong>React</strong> frontend with backend.'
			},
			{
				name: 'Perfect Men',
				link: 'https://perfectmenbeauty.com/en/',
                image: "",
				languages: [],
                description: "A branding website for Perfect Men.",
				involvement: 'Developed the whole website single-handedly with <strong>React</strong> and <strong>Next.js</strong> based on the design of UI designer.'
			},
			{
				name: 'Ho Man',
				link: 'https://myhoman.com',
                image: "",
                description: "A branding website for Ho Man.",
				languages: [],
				involvement: 'Developed the whole website single-handedly with <strong>11.ty</strong> based on the design of UI designer.'
			},
			{
				name: 'Survivalist HK',
				link: 'https://survivalisthk.com/jyut/',
                image: "",
                description: "A survivalist blog with Hong Kongers as its target audience.",
				languages: [],
				involvement: 'Designed, developed and deployed the application single-handedly with <strong>Wordpress</strong>.'
			},
			{
				name: 'How to study Cantonese',
				link: 'https://howtostudycantonese.com',
                image: "",
				languages: [],
                description: "An E-commerce website that sells Cantonese storybooks.",
				involvement: 'Designed, developed and deployed the application single-handedly from scratch with <strong>Wordpress</strong>.'
			},
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
