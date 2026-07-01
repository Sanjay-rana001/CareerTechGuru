import { IAdminModel } from "../interfaces/admin.interface";
import AdminModel from "../models/admin.model";

class AdminService {
    async createAdminModel(adminData: IAdminModel): Promise<IAdminModel | string> {
        try {
            const existingUserWithEmail = await AdminModel.findOne({
                companyEmail: adminData.companyEmail
            });
            if (existingUserWithEmail) {
                return 'Email already exists';
            }

            const existingMobileUser = await AdminModel.findOne({
                companyContact: adminData.companyContact
            });
            if (existingMobileUser) {
                return 'Mobile number already exists';
            }

            const response = new AdminModel(adminData);
            await response.save();
            return response;
        } catch (error) {
            console.error("Error creating admin model:", error);
            throw new Error('Error creating admin model');
        }
    }

    async getAdminDetailByAdminId(adminId: string): Promise<IAdminModel | null> {
        try {
          const user = await AdminModel.findOne({ adminId });
          return user; // user will be a single user or null
        } catch (error) {
          console.error(`Error fetching user by email: ${adminId}`, error);
          throw error; // Re-throw the error to handle it in the calling function
        }
    }

}

export const adminServices = new AdminService();