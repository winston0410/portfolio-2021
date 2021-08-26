import type { EndpointOutput } from '@sveltejs/kit';

const getData = (): Array<IEducation> => {
	return [
		{
			school_name: 'The Hong Kong University of Science and Technology',
			start_date: 'Sep 2017',
			end_date: 'Dec 2019'
		},
		{
			school_name: 'College of International Education',
			start_date: 'Sep 2017',
			end_date: 'Dec 2019'
		}
	];
};

interface IEducation {
	school_name: string;
	start_date: string;
	end_date: string;
    [key:string]: string
}

export async function get(): Promise<EndpointOutput<Array<IEducation>>> {
	return {
		body: getData()
	};
}
