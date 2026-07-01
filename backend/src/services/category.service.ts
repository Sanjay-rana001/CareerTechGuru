import { ICategoryModel } from "../interfaces/category.interface";
import { db } from "../Database";

class CategoryService {
    async createJobCategory (data : ICategoryModel): Promise<ICategoryModel> {
        try {
            const docRef = await db.collection('Category').add(data as any);
            return { _id: docRef.id, ...data };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllCategories(): Promise<ICategoryModel[]> {
        try {
            const snapshot = await db.collection('Category').get();
            return snapshot.docs.map(doc => ({ _id: doc.id, ...(doc.data() as any) })) as ICategoryModel[];
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    }
}

export const categoryService = new CategoryService();