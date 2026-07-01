import AdminData from '../models/superAdmin.model';
import { ICandidateData } from '../interfaces/superAdmin.interface';

class SuperAdminServices {
    async getAllCandidatesDetails(): Promise<ICandidateData[]> {
        try {
            const response = await AdminData.findAll();
            return response.map(candidate => candidate.get({ plain: true }) as ICandidateData);
        } catch (error) {
            console.error('Error fetching candidate details:', error);
            throw new Error('Unable to fetch candidate details');
        }
    }
}

export const superAdminService = new SuperAdminServices();
