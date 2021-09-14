export interface INavItem {
	name: string;
	url: string;
}

export interface ISocialProfile {
	url: string;
	icon_url: string;
	name: string;
}

export interface IProject {
	name: string;
	description: string;
	html_url: string;
	languages: {
		[key: string]: number;
	};
}

export interface IEducation {
	school_name: string;
	title: string;
	start_date: string;
	end_date: string;
}

export interface IAchievement {
	name: string;
	date: string;
	from: string;
}

export interface IWorkingExperience {
	company_name: string;
	title: string;
	start_date: string;
	end_date: string;
	duties: Array<string>;
	technologies: {
		[key: string]: boolean;
	};
}

export interface ICv {
    profile: Array<string>;
	working_experience: Array<IWorkingExperience>;
	education: Array<IEducation>;
	achievement: Array<IAchievement>;
}
