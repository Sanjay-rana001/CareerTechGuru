import mongoose, { Model, Schema } from "mongoose";
import { ICategoryModel } from "../interfaces/category.interface";


const IST_OFFSET_IN_MILLIS = 330 * 60 * 1000;
const categorySchema: Schema<ICategoryModel> = new mongoose.Schema({
    title: { type: String, required: true },
    basicTitle: { type: String, required: true },
    subCategory: [{ type: String }],
    shortDescription: { type: String, required: true },
    tags: [{ type: String }],
    profilePicture: { type: String },
    createdAt: { type: Date, default: new Date(Date.now() + IST_OFFSET_IN_MILLIS)},
    updatedAt: { type: Date, default: new Date(Date.now() + IST_OFFSET_IN_MILLIS)},
    emailVerified: { type: Boolean },
    deviceType: { type: String },
    browserName: { type: String },
});

const CategoryModel: Model<ICategoryModel> = mongoose.model<ICategoryModel>('categorie', categorySchema);
export default CategoryModel;
