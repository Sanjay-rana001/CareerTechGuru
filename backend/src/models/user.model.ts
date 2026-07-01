import mongoose, { Model, Schema } from "mongoose";
import { IUserModel } from "../interfaces/user.interface";

const IST_OFFSET_IN_MILLIS = 330 * 60 * 1000;
const userSchema:Schema<IUserModel> = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    bio: { type: String, required: true },
    experienceInYear: { type: Number, required: true },
    alternateNumber: { type: Number },
    resumeUrl: { type: String, required: true },
    createdAt: { type: Date, default: new Date(Date.now() + IST_OFFSET_IN_MILLIS)},
    updatedAt: { type: Date, default: new Date(Date.now() + IST_OFFSET_IN_MILLIS)},
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        country: { type: String, required: true },
        isPermanent : {type : Boolean, required : false}
    },
    interests: {
        category: [{ type: String, required: true }],
        location: [{ type: String, required: true }],
        jobType: [{ type: String, required: false }],
    },
    experiences: [{
        title: { type: String, required: true },
        company: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: false, default: null },        
        description: { type: String, required: true },
        isActive : {type : Boolean, required : false}
    }],
    education: [{
        title: { type: String, required: true },
        university: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: false, default: null },        
        marks: { type: String, required: true },
        isActive : {type : Boolean, required : false}
    }],
    links: {
        website: { type: String },
        linkedin: { type: String },
        github: { type: String },
        twitter: { type: String },
        portfolio: { type: String }
    }
});

const UserModel: Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);
export default UserModel;