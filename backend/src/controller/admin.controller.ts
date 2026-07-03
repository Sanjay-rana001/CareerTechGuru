import { Request, Response } from "express";
import { IAdminModel } from "../interfaces/admin.interface";
import { adminServices } from "../services/admin.service";

class AdminController {
  async createAdminModel(req: Request, res: Response): Promise<void> {
    try {
      const data: IAdminModel = req.body;
      const result = await adminServices.createAdminModel(data);
      if (typeof result === "string") {
        res.status(400).json({ message: result });
      } else {
        res.status(201).json(result);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAdminDetailByAdminId(req: Request, res: Response): Promise<void> {
    const { adminId } = req.params;

    if (!adminId) {
      res.status(400).json({ message: "adminId is required" });
      return;
    }

    try {
      const user = await adminServices.getAdminDetailByAdminId(adminId);
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
}

export const adminController = new AdminController();
