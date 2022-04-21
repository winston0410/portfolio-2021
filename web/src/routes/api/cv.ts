import type { RequestHandler } from '@sveltejs/kit';
import { ICompetency } from '$lib/typing';

const getCv = async () => {
	return {
		profile: [
			'Passionate and experienced frontend developer with over 2 years of experience with **React**, **Vue** and **Svelte**, built dozens of applications with these technologies.',
			'Competent in backend, created servers with **Javascript/Typescript**, **Java**, **Go** and **Rust**.',
			'Confident to work with RDBMS, with previous experience on **MySQL** and **PostgreSQL**.',
			'Proficient with DevOps technologies, built, deployed and managed machines with **Docker** and **Nix**.',
			'Actively participating in the opensource community, received hundreds of stars on GitHub.',
			'Promising mentoring and communication skills, nurtured hundreds with zero development background into software developers in Hong Kong and Singapore with Cantonese and English.'
		],
		visa_status: [
			// {
			//     country: "Canada",
			//     description: "I can work in Canada <strong>legally without any sponsorship</strong>. I am currently in <strong>Vancouver</strong>."
			// },
			{
				country: 'United Kingdom',
				description:
					'Being a BNO Visa holder, I can work in United Kingdom **legally without any sponsorship**.'
			}
		],
		working_experience: [
			{
				company_name: 'Nudge Digital',
				title: 'Software developer',
				location: 'United Kingdom',
				start_date: 'Jan 2022',
				end_date: 'Current',
				duties: [
					'Develop social care service for local council with **Javascript**, **React**, **Next.js**, and **AWS Lambda**.',
					'Develop prototype for NHS fault reporting service with **Typescript**, **Svelte** and **SvelteKit**.',
					'Build and test React component library for local council with **Typescript**, **Storybook**, **Jest** and **GitHub Action**.',
					'Port a legacy **Ruby on Rails** arrears management application to **Next.js**.'
				],
				technologies: {
					HTML: true,
					Javascript: true,
					Typescript: true,
					SCSS: true,
					Svelte: true,
					Ruby: true
				}
			},
			//  {
			//  company_name: 'HydrogenX Lab',
			//  title: 'Independent Contractor',
			//  start_date: 'Oct 2021',
			//  end_date: 'Nov 2021',
			//  duties: [
			//  'Develop web application for Trusted Node with <strong>Nuxt.js</strong>',
			//  'Scaffold and develop web application for UltraStable with <strong>Nuxt.js</strong>',
			//  ],
			//  technologies: {
			//  Typescript: true,
			//  Vue: true,
			//  SCSS: true,
			//  SASS: true,
			//  CSS: true,
			//  }
			//  },
			{
				company_name: 'Tecky Academy',
				title: 'Senior Frontend Developer/Instructor',
				location: 'Hong Kong',
				start_date: 'Feb 2021',
				end_date: 'Nov 2021',
				duties: [
					'Hosted lectures and assisted debugging on **Typescript**, **React**, **Redux**, UI Testing, containers composition with **Docker** and modern frontend development workflow for more than 100 students in Cantonese.',
					'Hosted lectures and assisted debugging on **HTML**, **CSS**, **Javascript**, **React** and **Java** for Generation Singapore in English.',
					'Created unit tests for existing coding platform with **Jest.js**.',
					'Designed and developed a roster system with **Svelte**, **Rust** and **Nix**.'
				],
				technologies: {
					Javascript: true,
					Typescript: true,
					Svelte: true,
					Dockerfile: true,
					HTML: true,
					CSS: true,
					SCSS: true,
					Go: true,
					Rust: true,
					Java: true,
					Nix: true,
					SQL: true
				}
			},
			{
				company_name: 'Perfect Medical Group',
				title: 'Web developer',
				location: 'Hong Kong',
				start_date: 'Jul 2020',
				end_date: 'Jan 2021',
				duties: [
					'Developed static branding sites with **11ty** and **Nunjucks**.',
					'Developed dynamic branding sites with **React** and **Next.js**.',
					'Optimized the performance of existing branding websites based on **Google Lighthouse**.',
					'Improved the SEO ranking of existing branding websites with **JSON Schema**.'
				],
				technologies: {
					Javascript: true,
					Typescript: true,
					Purescript: true,
					HTML: true,
					CSS: true,
					Nunjucks: true
				}
			},
			{
				company_name: 'How to study Cantonese Education Company',
				title: 'Founder',
				location: 'Hong Kong',
				start_date: 'Jan 2019',
				end_date: 'Mar 2020',
				duties: [
					'Designed and developed an E-commerce website with **Wordpress**.',
					'Optimized the SEO ranking and loading performance based on the audit of **Google Lighthouse**.'
				],
				technologies: { HTML: true, CSS: true, Javascript: true, PHP: true }
			}
		],
		education: [
			{
				school_name: 'The Hong Kong University of Science and Technology',
				title: 'Bachelor of Business Administration - BBA, Management',
				start_date: '2017',
				end_date: '2019'
			}
			// {
			// 	school_name: 'College of International Education, HKBU',
			// 	title: "Associate's degree, Business Administration and Management",
			// 	start_date: '2015',
			// 	end_date: '2017'
			// },
			//  {
			//  school_name: 'Baptist Lui Ming Choi Secondary School',
			//  title: '',
			//  start_date: '2009',
			//  end_date: '2015'
			//  }
		],
		achievement: [
			//  {
			//  name: 'HKUST Yeung Wing Yee Entrepreneurs Fund Awardees',
			//  date: 'Oct 2019',
			//  from: 'HKUST Entrepreneurship Center'
			//  },
			//  {
			//  name: 'HKUST Entrepreneurship Acceleration Fund Awardees',
			//  date: 'Apr 2019',
			//  from: 'HKUST Entrepreneurship Center'
			//  },
			{
				name: 'Outstanding performance scholarship',
				date: '2016, 2017',
				from: 'Education Bureau of HKSAR'
			}
		],

		languages: [
			{
				name: 'English',
				level: ICompetency.Fluent
			},
			{
				name: 'Cantonese',
				level: ICompetency.Native
			},
			{
				name: 'Chinese',
				level: ICompetency.Fluent
			}
		]
	};
};

export const get: RequestHandler = async () => {
	try {
		const data = await getCv();
		return {
			body: data
		};
	} catch (e) {
		return {
			status: 500
		};
	}
};
