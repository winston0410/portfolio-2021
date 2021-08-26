import type { EndpointOutput } from '@sveltejs/kit';

const getData = (): Array<IWorkExperience> => {
	return [
		{
			company_name: 'Tecky Academy',
			position_name: 'Senior frontend developer/Instructor',
			start_date: 'Feb 2021',
			end_date: 'Current'
		},
		{
			company_name: 'Perfect Shape Group',
			position_name: 'Web developer',
			start_date: 'Jul 2020',
			end_date: 'Jan 2021'
		},
		{
			company_name: 'Perfect Shape Group',
			position_name: 'Web developer',
			start_date: 'Jul 2020',
			end_date: 'Jan 2021'
		},
		{
			company_name: 'A&A Limited',
			position_name: 'Web developer',
			start_date: 'Jul 2020',
			end_date: 'Jul 2020'
		},
		{
			company_name: 'How to study Cantonese education company',
			position_name: 'Founder',
			start_date: 'Apr 2018',
			end_date: 'Jun 2020'
		},
		{
			company_name: 'Smart Go Academy',
			position_name: 'Instructor',
			start_date: 'June 2015',
			end_date: 'Mar 2020'
		}
	];
};

interface IWorkExperience {
	company_name: string;
	position_name: string;
	start_date: string;
	end_date: string;
	[key: string]: string;
}

export async function get(): Promise<EndpointOutput<Array<IWorkExperience>>> {
	return {
		body: getData()
	};
}
