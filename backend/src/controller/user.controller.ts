import { Request, Response } from "express";
import { IUserModel } from "../interfaces/user.interface";
import { userServices } from "../services/user.service";

class UserController {
  async createUserDetails(req: Request, res: Response): Promise<void> {
    try {
      const data: IUserModel = req.body;
      const response = await userServices.createUserDetails(data);
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async getUserByEmail(req: Request, res: Response): Promise<void> {
    const { email } = req.params;

    if (!email) {
      res.status(400).json({ message: "Email is required" });
      return;
    }

    try {
      const user = await userServices.getJobUserByEmail(email);
      if (user) {
        res
          .status(200)
          .json({ message: "data fetched successfully", data: user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async updateUserDetails(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params;
      const { key, value } = req.body;

      if (!key || !value) {
        res.status(400).json({ message: "Key and value are required" });
        return;
      }

      const message = await userServices.updateUserDetails(email, key, value);
      res.status(200).json({ message });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export const userController = new UserController();
