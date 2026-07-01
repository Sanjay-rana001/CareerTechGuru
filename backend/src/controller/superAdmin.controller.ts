import { Request, Response } from "express";
import { superAdminService } from "../services/superAdmin.service";

class SuperAdminController {
    async getAllCandidatesDetails(req: Request, res: Response): Promise<void> {
        try {
            const candidates = await superAdminService.getAllCandidatesDetails();
            res.status(200).json(candidates);
        } catch (error) {
            console.error('Error fetching candidate details:', error);
            res.status(500).json({ message: 'Unable to fetch candidate details' });
        }
    }
}

export const superAdminController = new SuperAdminController();