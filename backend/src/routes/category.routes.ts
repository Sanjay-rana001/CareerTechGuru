import express from "express";
import { categoryController } from "../controller/category.controller";

export const categoryRoutes = express.Router();

categoryRoutes.post("/add-category", categoryController.createJobCategory);
categoryRoutes.get("/get-all-category", categoryController.getAllCategoriess);
