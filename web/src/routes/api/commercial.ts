import type { RequestHandler } from '@sveltejs/kit';

type ICommercialProject = {
	name: string;
	link: string;
	languages: Array<string>;
	description: string;
	involvement: Array<string>;
};

export const get: RequestHandler = async () => {
	try {
		const body: Array<ICommercialProject> = [
			{
				name: 'How to study Cantonese',
				link: 'https://howtostudycantonese.com',
				languages: [],
                description: "",
				involvement: [
					'Design, develop and deploy a E-commerce website from scratch with Wordpress.'
				]
			},
			{
				name: 'Survivalist HK',
				link: 'https://survivalisthk.com/jyut/',
                description: "",
				languages: [],
				involvement: ['Design, develop and deploy a survivalist blog from scratch with Wordpress.']
			},
			{
				name: 'Ho Man',
				link: 'https://myhoman.com',
                description: "",
				languages: [],
				involvement: []
			},
			{
				name: 'Perfect Men',
				link: 'https://perfectmenbeauty.com/en/',
				languages: [],
                description: "",
				involvement: []
			},
			{
				name: 'Tecky Code',
				link: 'https://code.tecky.io',
				languages: [],
                description: "",
				involvement: []
			},
			{
				name: 'Trusted Node',
				link: 'https://app.trustednode.io',
				languages: [],
                description: "",
				involvement: []
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
