import { Request, Response } from "express";
import { db } from "../Database";

export const createContactUsQuery = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, description } = req.body;

    if (!name || !email || !phoneNumber || !description) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    await db.collection("ContactUsQueries").add({
      name,
      email,
      phoneNumber,
      description,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error" });
  }
};
