export enum ICompetency {
    Native = "Native",
    Fluent = "Fluent"
}

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
	languages: ILanguages;
}


export interface ICommercialProject {
	name: string;
	link: string;
	languages: ILanguages;
	description: string;
	involvements: Array<string>;
    image: string;
};

// export interface ISrcset {
// 	webp: string,
// 	jpg: string
// }

export interface ICommercialProjectWithSrcset extends ICommercialProject {
	srcset: string
}


export type ILanguages = {
	[key: string]: boolean;
};

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
	location: string
}

export type INaturalLanguage = {
    name: string
    level: ICompetency
};

export type IVisaStatus = {
    country: string;
    description: string
};

export interface ICv {
	profile: Array<string>;
    visa_status: Array<IVisaStatus>;
	working_experience: Array<IWorkingExperience>;
	education: Array<IEducation>;
	achievement: Array<IAchievement>;
	languages: Array<INaturalLanguage>;
}
