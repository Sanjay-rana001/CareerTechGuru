import express from 'express';
import { productController } from '../controller/product.controller';
import { authenticateToken } from '../middleware/auth.middleware';
import { checkUserPrivileges } from '../middleware/admin.middleware';
import { Roles } from '../enums/auth.enum';
export const productRoutes = express.Router();

productRoutes.post('/add-job-application',authenticateToken, checkUserPrivileges([Roles.ADMIN]), productController.createJobApplication);
productRoutes.get('/get-job-application/admin/:adminId',authenticateToken,checkUserPrivileges([Roles.ADMIN]), productController.getJobApplicationsById);
productRoutes.get('/get-job-applications',productController.getAllApplications);
productRoutes.get('/search-product',productController.searchProducts);
productRoutes.get('/get-job/job/:id', productController.getJobApplicationByJobId);
productRoutes.get('/get-all-cities', productController.getAllUniqueCities);
productRoutes.get('/get-unique-value',productController.getJobLocation);
productRoutes.get('/get-unique-compnany',productController.getUniqueCompanyDetails);



productRoutes.delete('/delete-job-application/id/:id',authenticateToken,checkUserPrivileges([Roles.ADMIN]), productController.deleteProductById);
