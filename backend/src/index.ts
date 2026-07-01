import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import bodyParser from 'body-parser';
import CorsConfig from './config/cors.config';
import {Connection} from './Database';
import { SqlConnection } from './connections/mysql.connection';
import { authRoutes } from './routes/auth.routes';
import { adminRoutes } from './routes/admin.routes';
import { productRoutes } from './routes/product.routes';
import { userRoutes } from './routes/user.routes';
import { categoryRoutes } from './routes/category.routes';
import { contactUsQueries } from './routes/contactus_queries.routes';
import log from './utils/logger';
import { initializeAdminSqlConnection } from './connections/admin.connection';
import { superAdminRoutes } from './routes/superAdmin.routes';
// Initialize the server

type ErrorHandler = (err : Error, req : Request, res : Response, next : NextFunction) => void;

const initializeServer = async():Promise<void> => {
    dotenv.config();
    const port: string = `${process.env.PORT}`;
    const app : Application = express();

    app.use(CorsConfig);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(
        {
            extended : true
        }
    ));
    app.use('/api/v1/auth',authRoutes);
    app.use('/api/v1/admin', adminRoutes)
    app.use('/api/v1/job', productRoutes);
    app.use('/api/v1/user', userRoutes)
    app.use('/api/v1/category', categoryRoutes);
    app.use('/api/v1/manage', superAdminRoutes)
    app.use('/api/v1/contact-us', contactUsQueries)

    try {
        await Connection()
        await SqlConnection();
        await initializeAdminSqlConnection();
        const server: http.Server = http.createServer(app);

        server.listen(port, (): void => {
            log.info(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }

};

initializeServer();
