import { Types } from "mongoose";
import { IUserModel } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { userSchemaValidate } from "../schemas/user.schema";

class UserService {
    async createUserDetails (data : IUserModel): Promise<IUserModel> {
        try {
            const {error} = userSchemaValidate.validate(data);
            if (error) {
                throw new Error(`Validation error: ${error.details.map((x: any) => x.message).join(', ')}`);
            }

            const response = await UserModel.create(data);
            return response;
        } catch (error) {
            throw new Error(`Error creating user: ${error}`);
        }
    }
    async getJobUserByEmail(email: string): Promise<IUserModel | null> {
        try {
          const user = await UserModel.findOne({ email });
          return user; // user will be a single user or null
        } catch (error) {
          console.error(`Error fetching user by email: ${email}`, error);
          throw error; // Re-throw the error to handle it in the calling function
        }
    }

    async updateUserDetails(emailId: string, key: string, value: string): Promise<string> {
        try {
            console.log(emailId , "sdsd", key, "ss", value)
            const updateObject: any = {};
            updateObject[key] = value;

            await UserModel.updateOne(
                { email: emailId },
                { $set: updateObject }
            );
            return 'User updated successfully';
        } catch (error) {
            console.error(`Error updating user field: ${key} with value: ${value} for email: ${emailId}`, error);
            throw new Error(`Error updating user field: ${error}`);
        }
    }
}

export const userServices = new UserService();