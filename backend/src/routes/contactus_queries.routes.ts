import express, { Request, Response } from "express";
import { createContactUsQuery } from "../controller/contactus_queries.controller";

export const contactUsQueries = express.Router();

// POST /api/contact
contactUsQueries.post("/contact-query", createContactUsQuery);
