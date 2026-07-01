import express from 'express';
import { superAdminController } from '../controller/superAdmin.controller';

export const superAdminRoutes = express.Router();

superAdminRoutes.get('/get-all-cadidates', superAdminController.getAllCandidatesDetails);