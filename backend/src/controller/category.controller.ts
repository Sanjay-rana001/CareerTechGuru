import { Request, Response } from "express";
import { categorySchemaValidate } from "../schemas/category.schema";
import { categoryService } from "../services/category.service";

class CategoryController {
    async createJobCategory(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            const { error } = categorySchemaValidate.validate(data);

            if (error) {
                res.status(400).json({ message: error.details[0].message });
                return;
            }

            const response = await categoryService.createJobCategory(data);
            res.status(201).json({measage : "category added successfully", data: response });
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    async getAllCategoriess(req: Request, res: Response): Promise<void> {
        try {
            const applications = await categoryService.getAllCategories();
            res.status(200).json({message: 'data fetched successfully',data:applications});
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch applications', error: error });
        }
    };
}

export const categoryController = new CategoryController();