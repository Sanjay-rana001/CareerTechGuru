import { Types } from "mongoose";
import { ICompanyDetails, IProduct, IQueryParams } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";
import { buildQuery } from "../utils/product.utils";

class ProductService {
    async createJobApplication (data : IProduct): Promise<IProduct> {
        try {
            const response = await ProductModel.create(data);
            return response 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllApplications(): Promise<IProduct[]> {
        try {
            const response = await ProductModel.find({});
            return response as IProduct[]; // Assuming response is an array of products
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error; // Re-throw the error to handle it in the calling function
        }
    }

    async getJobApplicationsById(adminId: string): Promise<IProduct[]> {
        try {
            const response = await ProductModel.find({ adminId });
            return response as IProduct[]; // Assuming response is an array of products
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error; // Re-throw the error to handle it in the calling function
        }
    }
    
    async getJobApplicationByJobId(id: string): Promise<IProduct | null> {
        try {
            const response = await ProductModel.findById(new Types.ObjectId(id));
            return response; // response will be a single product or null
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error; // Re-throw the error to handle it in the calling function
        }
    }

    async useSearchApplicationQuery(queryParams : IQueryParams): Promise<IProduct[]> {
        try {
            const query = buildQuery(queryParams);
            const response = await ProductModel.find(query).exec();
            return response;
        } catch (error) {
            console.error('Error in useSearchApplicationQuery:', error);
            throw new Error('Error retrieving products');
        }
    }

    async deleteProductById(id: string): Promise<string> {
        try {
          const deletedProduct = await ProductModel.findByIdAndDelete(id).lean();
          if (!deletedProduct) {
            throw new Error(`Product with id ${id} not found`);
          }
          return 'Product deleted successfully';
        } catch (error) {
          throw new Error(`Error deleting product: ${error}`);
        }
      }

    async getAllUniqueCities(): Promise<string[]> {
        try {
            const cities = await ProductModel.distinct('jobLocation').exec();
            return cities as string[];
        } catch (error) {
            console.error('Error fetching unique cities:', error);
            throw error;
        }
    }

    async getJobLocation ():Promise<string[]>{
        try {
            const response =  await ProductModel.distinct("jobLocation").exec();
            return response as string[];
        } catch (error) {
            console.error(`Error fetching unique values for :`, error);
            throw error;
        }
    }
    async getUniqueCompanyDetails ():Promise<ICompanyDetails[]>{
        try {
            const response  = await ProductModel.aggregate([
                { $group : {
                    _id : "$companyName",
                    profilePicture : {$first : "$profilePicture"}
                }},
                { $project : {
                    _id : 0,
                    companyName : "$_id",
                    profilePicture : 1
                }}
            ]).exec();

            return response as ICompanyDetails[];
        } catch (error) {
            console.error('Error fetching unique company details:', error);
            throw new Error('Error retrieving unique company details');
        }
    }
    
}

export const productServices = new ProductService();