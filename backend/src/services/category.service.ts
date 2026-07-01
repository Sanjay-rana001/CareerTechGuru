import { ICategoryModel } from "../interfaces/category.interface";
import CategoryModel from "../models/category.model";

class CategoryService {
    async createJobCategory (data : ICategoryModel): Promise<ICategoryModel> {
        try {
            const response = await CategoryModel.create(data);
            return response 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllCategories(): Promise<ICategoryModel[]> {
        try {
            const response = await CategoryModel.find({});
            return response as ICategoryModel[]; // Assuming response is an array of products
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error; // Re-throw the error to handle it in the calling function
        }
    }
}

export const categoryService = new CategoryService();