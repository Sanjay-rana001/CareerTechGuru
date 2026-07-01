import { IUserModel } from "../interfaces/user.interface";
import { userSchemaValidate } from "../schemas/user.schema";
import { db } from "../Database";

class UserService {
    async createUserDetails (data : IUserModel): Promise<IUserModel> {
        try {
            const {error} = userSchemaValidate.validate(data);
            if (error) {
                throw new Error(`Validation error: ${error.details.map((x: any) => x.message).join(', ')}`);
            }

            const docRef = await db.collection('User').add(data as any);
            return { _id: docRef.id, ...data };
        } catch (error) {
            throw new Error(`Error creating user: ${error}`);
        }
    }
    async getJobUserByEmail(email: string): Promise<IUserModel | null> {
        try {
          const snapshot = await db.collection('User').where('email', '==', email).limit(1).get();
          if (snapshot.empty) return null;
          const doc = snapshot.docs[0];
          return { _id: doc.id, ...(doc.data() as any) } as IUserModel;
        } catch (error) {
          console.error(`Error fetching user by email: ${email}`, error);
          throw error;
        }
    }

    async updateUserDetails(emailId: string, key: string, value: string): Promise<string> {
        try {
            console.log(emailId , "sdsd", key, "ss", value)
            const updateObject: any = {};
            updateObject[key] = value;

            const snapshot = await db.collection('User').where('email', '==', emailId).limit(1).get();
            if (snapshot.empty) {
                throw new Error('User not found');
            }

            const docId = snapshot.docs[0].id;
            await db.collection('User').doc(docId).update(updateObject);
            return 'User updated successfully';
        } catch (error) {
            console.error(`Error updating user field: ${key} with value: ${value} for email: ${emailId}`, error);
            throw new Error(`Error updating user field: ${error}`);
        }
    }
}

export const userServices = new UserService();