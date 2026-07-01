import { Request, Response } from "express";
import { ICompanyDetails, IProduct, IQueryParams } from "../interfaces/product.interface";
import { productSchemaValidate } from "../schemas/product.schema";
import { productServices } from "../services/product.service";

class ProductController {
    async createJobApplication(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            const { error } = productSchemaValidate.validate(data);

            if (error) {
                res.status(400).json({ message: error.details[0].message });
                return;
            }

            const response = await productServices.createJobApplication(data);
            res.status(201).json({ data: response });
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    async getAllApplications(req: Request, res: Response): Promise<void> {
        try {
            const applications = await productServices.getAllApplications();
            res.status(200).json(applications);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch applications', error: error });
        }
    };

    async getJobApplicationsById(req: Request, res: Response): Promise<void> {
        try {
            const adminId: string = req.params.adminId;
            const products = await productServices.getJobApplicationsById(adminId);

            if (products.length === 0) {
                res.status(404).json({ success: false, message: 'No products found for the specified adminId' });
                return;
            }

            res.status(200).json({ success: true, data: products });
        } catch (error) {
            console.error('Error in getJobApplicationsByIdController:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    };

    async getJobApplicationByJobId(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id || typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid product ID' });
            return;
        }

        try {
            const product = await productServices.getJobApplicationByJobId(id);
            if (product) {
                res.status(200).json({message: "data fetched successfully", data : product});
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getAllUniqueCities(req: Request, res: Response) {
        try {
            const uniqueCities = await productServices.getAllUniqueCities();
            res.json(uniqueCities);
        } catch (error) {
            res.status(500).json({ error});
        }
    }
    async searchProducts(req: Request, res: Response): Promise<void> {
        try {
            const queryParams: IQueryParams = req.query as unknown as IQueryParams; // Ensure the query params are cast correctly
            const products = await productServices.useSearchApplicationQuery(queryParams);
            res.json(products);
        } catch (error) {
            console.error('Error in searchProducts:', error);
            res.status(500).json({ error: 'Error retrieving products' });
        }
    }

    async deleteProductById(req: Request, res: Response) {
        try {
          const id = req.params.id;
          const result = await productServices.deleteProductById(id);
          res.status(200).send({ message: result });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error deleting product' });
        }
    }

    async getJobLocation(req: Request, res: Response):Promise<void>{
        try {
            const response = await productServices.getJobLocation();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async getUniqueCompanyDetails(req: Request, res: Response): Promise<void> {
        try {
          const companyDetails = await productServices.getUniqueCompanyDetails(); // Assuming this function returns a Promise
          res.status(200).json({ data: companyDetails });
        } catch (error) {
          console.error('Error fetching unique company details:', error);
          res.status(500).json({ message: 'Error retrieving unique company details' });
        }
    }
}

export const productController = new ProductController();
