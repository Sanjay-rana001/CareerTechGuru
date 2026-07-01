export interface IUserModel {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    gender: string;
    dateOfBirth: Date;
    bio: string;
    experienceInYear: number;
    alternateNumber?: number;
    resumeUrl: string;
    createdAt: Date;
    updatedAt: Date;
    address?: Address;
    experiences?: Experience[];
    education? : Education[];
    interests? : IUserProfile; 
    links?: Links;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    isPermanent: boolean;
}

export interface Experience {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    isActive: boolean;
}

export interface Education {
    title: string;
    university: string;
    startDate: Date;
    endDate?: Date;
    marks: string;
    isActive: boolean;
}

export interface Links {
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    portfolio?: string;
}
export interface IUserProfile {
    category?: string[];
    location?: string[];
    jobType? : string[];
}
