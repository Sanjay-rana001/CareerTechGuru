import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import bodyParser from "body-parser";
import CorsConfig from "./config/cors.config";
import { Connection } from "./Database";
import { authRoutes } from "./routes/auth.routes";
import { adminRoutes } from "./routes/admin.routes";
import { productRoutes } from "./routes/product.routes";
import { userRoutes } from "./routes/user.routes";
import { categoryRoutes } from "./routes/category.routes";
import { contactUsQueries } from "./routes/contactus_queries.routes";
import log from "./utils/logger";
import { superAdminRoutes } from "./routes/superAdmin.routes";
// Initialize the server

type ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

dotenv.config();

const app: Application = express();
app.use(CorsConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/job", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/manage", superAdminRoutes);
app.use("/api/v1/contact-us", contactUsQueries);

// Initialize DB connection
Connection().catch((error) => {
  console.error("Failed to connect to Firebase:", error);
});

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    log.info(`Server is running on http://localhost:${port}`);
  });
}

export default app;
