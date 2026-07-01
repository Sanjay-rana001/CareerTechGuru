import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import log from '../utils/logger';

dotenv.config();

// Initialize Sequelize connection parameters
const database: string = process.env.ADMIN_SQL_DBNAME as string;
const user: string = process.env.ADMIN_SQL_DBUSER as string;
const password: string = process.env.ADMIN_SQL_DBPASSWORD as string;
const host: string = process.env.SQL_HOSTURL as string;

// Create a Sequelize instance
export const adminSequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
    port: Number(process.env.SQL_DB_PORT || 3306),
    logging: false,
});

// Function to establish connection with MySQL
export const initializeAdminSqlConnection = async (): Promise<void> => {
    try {
        // Authenticate Sequelize instance
        await adminSequelize.authenticate();
        log.info('Admin SQL Connection to MySQL has been established successfully.');
        // Synchronize all defined models with the database
        await adminSequelize.sync();
        log.info('All models were synchronized successfully.');
    } catch (error) {
        log.error('Unable to connect to the database:');
        console.error(error);
        process.exit(1);
    }
};
