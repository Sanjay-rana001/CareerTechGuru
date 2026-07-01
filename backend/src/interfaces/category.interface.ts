import { Types } from "mongoose";

export interface ICategoryModel {
    _id?: Types.ObjectId | string;
    id?: string;
    title: string;
    basicTitle: string;
    subCategory : string[];
    shortDescription: string;
    tags: string[];
    profilePicture?: string;
    createdAt: Date;
    updatedAt?: Date
    emailVerified?: boolean;
    deviceType? : string;
    browserName? : string,
    toJSON?: () => unknown;
}