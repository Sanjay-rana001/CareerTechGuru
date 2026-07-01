import { Request, Response } from 'express';
import ContactUsModel from '../models/contactus_queries';
import { Error as MongooseError } from 'mongoose';

export const createContactUsQuery = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, description } = req.body;

    const newContact = new ContactUsModel({
      name,
      email,
      phoneNumber,
      description,
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    if (error instanceof MongooseError.ValidationError) {
      // Extract the first validation error message to send back to the client
      const messages = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: messages[0] });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
};