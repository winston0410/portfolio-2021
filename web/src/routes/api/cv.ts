import type { RequestHandler } from '@sveltejs/kit';
import {ICompetency} from '$lib/typing'

const getCv = async () => {
	return {
		profile: [
			'Passionate and experienced frontend developer with over 2 years of experience with <strong>React</strong>, <strong>Vue</strong> and <strong>Svelte</strong>, built dozens of applications with these technologies.',
			'Competent in backend, created servers with <strong>Javascript/Typescript</strong>, <strong>Java</strong>, <strong>Go</strong> and <strong>Rust</strong>.',
			'Confident to work with RDBMS, with previous experience on <strong>MySQL</strong> and <strong>PostgreSQL</strong>.',
			'Proficient with DevOps technologies, built, deployed and managed machines with <strong>Docker</strong> and <strong>Nix</strong>.',
			'Actively participating in the opensource community, received hundreds of stars on GitHub.',
			'Promising mentoring and communication skills, nurtured hundreds with zero development background into software developers in Hong Kong and Singapore with Cantonese and English.'
		],
        visa_status:[
            {
                country: "Canada",
                description: "I can work in Canada <strong>legally without any sponsorship</strong>. I will be in Canada by 6 December 2021."
            },
            //  {
                //  country: "United Kingdom",
                //  descripton: ""
            //  }
        ],
		working_experience: [
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
				start_date: 'Feb 2021',
				end_date: 'Nov 2021',
				duties: [
					'Host lectures and assist debugging on <strong>Typescript</strong>, <strong>React</strong>, <strong>Redux</strong>, UI Testing, containers composition with <strong>Docker</strong> and modern frontend development workflow for more than 100 students in Cantonese.',
					'Host lectures and assist debugging on <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>React</strong> and <strong>Java</strong> for Generation Singapore in English.',
					'Host code reviews for students in both frontend and backend.',
					'Create unit tests for existing coding platform with <strong>Jest.js</strong>.',
					'Design and develop a roster system with <strong>Svelte</strong>, <strong>Rust</strong> and <strong>Nix</strong>.'
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
				start_date: 'Jul 2020',
				end_date: 'Jan 2021',
				duties: [
					'Develop static branding sites with <strong>11ty</strong> and <strong>Nunjucks</strong>.',
					'Develop dynamic branding sites with <strong>React</strong> and <strong>Next.js</strong>.',
					'Optimize the performance of existing branding websites based on Google Lighthouse.',
					'Improve the SEO ranking of existing branding websites with JSON Schema.'
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
				start_date: 'Jan 2019',
				end_date: 'Mar 2020',
				duties: [
					'Design and develop an E-commerce website with <strong>Wordpress</strong>.',
					'Optimize the SEO ranking and loading performance based on the audit of Google Lighthouse.'
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
			},
			{
				school_name: 'College of International Education, HKBU',
				title: "Associate's degree, Business Administration and Management",
				start_date: '2015',
				end_date: '2017'
			},
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
				date: '2017',
				from: 'Education Bureau of HKSAR'
			},
			{
				name: 'Outstanding performance scholarship',
				date: '2016',
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
        }
	}
};
