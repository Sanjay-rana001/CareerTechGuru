import { IAdminModel } from "../interfaces/admin.interface";
import { db } from "../Database";

class AdminService {
    async createAdminModel(adminData: IAdminModel): Promise<IAdminModel | string> {
        try {
            const emailSnapshot = await db.collection('Admin').where('companyEmail', '==', adminData.companyEmail).limit(1).get();
            if (!emailSnapshot.empty) {
                return 'Email already exists';
            }

            const mobileSnapshot = await db.collection('Admin').where('companyContact', '==', adminData.companyContact).limit(1).get();
            if (!mobileSnapshot.empty) {
                return 'Mobile number already exists';
            }

            const docRef = await db.collection('Admin').add(adminData as any);
            return { _id: docRef.id, ...adminData };
        } catch (error) {
            console.error("Error creating admin model:", error);
            throw new Error('Error creating admin model');
        }
    }

    async getAdminDetailByAdminId(adminId: string): Promise<IAdminModel | null> {
        try {
          const snapshot = await db.collection('Admin').where('adminId', '==', adminId).limit(1).get();
          if (snapshot.empty) return null;
          const doc = snapshot.docs[0];
          return { _id: doc.id, ...(doc.data() as any) } as IAdminModel;
        } catch (error) {
          console.error(`Error fetching user by adminId: ${adminId}`, error);
          throw error;
        }
    }

}

export const adminServices = new AdminService();