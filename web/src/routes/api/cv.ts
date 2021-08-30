import type { RequestHandler } from '@sveltejs/kit';

const getCv = async () => {
    return {
        working_experience: [
            {
                company_name: "Tecky Academy",
                title: "Senior Frontend Developer/Instructor",
                start_date: "Feb 2021",
                end_date: "Present",
                duties: ["Host lectures on React, Redux, UI Testing and modern frontend development workflow.", "Host code reviews for students in both frontend and backend.", "Test backend for existing company projects with Jest", "Develop roster application with Svelte and Golang"],
                tech_used: ["Javascript", "Typescript", "Svelte", "Dockerfile", "HTML", "CSS", "Golang", "Java"]
            },
            {
                company_name: "Perfect Medical Group",
                title: "Web developer",
                start_date: "Jul 2020",
                end_date: "Jan 2021",
                duties: ["Develop static brand site with 11ty and Nunjucks.", "Develop dynamic brand site with React and Next.js."],
                tech_used: ["Javascript", "Typescript", "Purescript", "HTML", "CSS"]
            },
            ],
        education: [
            {
                school_name: "The Hong Kong University of Science and Technology",
                title: "Bachelor of Business Administration - BBA, Management",
                start_date: "2017",
                end_date: "2019"
            },
            {
                school_name: "College of International Education, HKBU",
                title: "Associate's degree, Business Administration and Management",
                start_date: "2015",
                end_date: "2017"
            },
            {
                school_name: "Baptist Lui Ming Choi Secondary School",
                title: "",
                start_date: "2009",
                end_date: "2015"
            }
        ],
        achievement: [
        {
            name: "HKUST Yeung Wing Yee Entrepreneurs Fund Awardees",
            date: "Oct 2019",
            from: "HKUST Entrepreneurship Center"
        },
        {
            name: "HKUST Entrepreneurship Acceleration Fund Awardees",
            date: "Apr 2019",
            from: "HKUST Entrepreneurship Center"
        },
        {
            name: "Outstanding performance scholarship",
            date: "2017",
            from: "Education Bureau of HKSAR"
        },
        {
            name: "Outstanding performance scholarship",
            date: "2016",
            from: "Education Bureau of HKSAR"
        }]
    }
};

export const get: RequestHandler = async (req) => {
	const data = await getCv();
	return {
		body: data
	};
};
