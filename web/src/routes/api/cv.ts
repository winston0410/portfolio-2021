import type { RequestHandler } from '@sveltejs/kit';
import type { ICv } from '$lib/typing';

const getCv = async (): Promise<ICv> => {
	return {
		profile: [
			'Passionate and experienced fullstack developer who have exposed to multiple paradigms and fields, actively seeking for the best solutions in frontend, backend and devops.',
			'Actively participating in the opensource community, contributed to and initiated dozens projects, received hundreds of stars on GitHub.',
			'Promising mentoring and leading skills, which have nurtured hundreds with zero development background into a professional software developer in Hong Kong and Singapore.'
		],
		working_experience: [
            
			{
				company_name: 'HydrogenX Lab',
				title: 'Independent Contractor',
				start_date: 'Oct 2021',
				end_date: 'Nov 2021',
				duties: [
					'Develop and style web application for Trusted Node with Nuxt.js',
					'Scaffold, develop and style web application for UltraStable with Nuxt.js',
				],
				technologies: {
					Typescript: true,
					Vue: true,
					SCSS: true,
					SASS: true,
					CSS: true,
				}
			},
			{
				company_name: 'Tecky Academy',
				title: 'Senior Frontend Developer/Instructor',
				start_date: 'Feb 2021',
				end_date: 'Nov 2021',
				duties: [
					'Host lectures and provide assistence on Typescript, React, Redux, UI Testing, containers composition with Docker and modern frontend development workflow for more than 100 students in Cantonese.',
					'Host lectures and provide assistence on HTML, CSS, Javascript, React and Java for Generation Singapore in English.',
					'Host code reviews for students in both frontend and backend.',
					'Create unit test for existing coding platform with Jest.',
					'Develop roster application with Svelte and Golang.'
				],
				technologies: {
					Javascript: true,
					Typescript: true,
					Svelte: true,
					Dockerfile: true,
					HTML: true,
					CSS: true,
					Go: true,
					Java: true,
					Nix: true,
					SQL: true
				}
			},
			{
				company_name: 'Perfect Medical Group',
				title: 'Web developer',
				start_date: 'Jul 2020',
				end_date: 'Jan 2021',
				duties: [
					'Develop static branding sites with 11ty and Nunjucks.',
					'Develop dynamic branding sites with React and Next.js.',
					'Optimize the performance of existing branding websites based on Google Lighthouse.',
					'Improve the SEO ranking of existing branding websites with JSON Schema.'
				],
				technologies: {
					Javascript: true,
					Typescript: true,
					Purescript: true,
					HTML: true,
					CSS: true
				}
			},
			{
				company_name: 'How to study Cantonese Education Company',
				title: 'Founder',
				start_date: 'Jan 2019',
				end_date: 'Mar 2020',
				duties: [
					'Design and develop an E-commerce website with Wordpress.',
					'Optimize the SEO ranking and loading performance based on the audit of Google Lighthouse.'
				],
				technologies: { HTML: true, CSS: true, Javascript: true }
			}
		],
		education: [
			{
				school_name: 'The Hong Kong University of Science and Technology',
				title: 'Bachelor of Business Administration - BBA, Management',
				start_date: '2017',
				end_date: '2019'
			},
			{
				school_name: 'College of International Education, HKBU',
				title: "Associate's degree, Business Administration and Management",
				start_date: '2015',
				end_date: '2017'
			},
			{
				school_name: 'Baptist Lui Ming Choi Secondary School',
				title: '',
				start_date: '2009',
				end_date: '2015'
			}
		],
		achievement: [
			{
				name: 'HKUST Yeung Wing Yee Entrepreneurs Fund Awardees',
				date: 'Oct 2019',
				from: 'HKUST Entrepreneurship Center'
			},
			{
				name: 'HKUST Entrepreneurship Acceleration Fund Awardees',
				date: 'Apr 2019',
				from: 'HKUST Entrepreneurship Center'
			},
			{
				name: 'Outstanding performance scholarship',
				date: '2017',
				from: 'Education Bureau of HKSAR'
			},
			{
				name: 'Outstanding performance scholarship',
				date: '2016',
				from: 'Education Bureau of HKSAR'
			}
		]
	};
};

export const get: RequestHandler = async (req) => {
	try {
		const data = await getCv();
		return {
			body: data
		};
	} catch (e) {
		console.log(e);
	}
};
