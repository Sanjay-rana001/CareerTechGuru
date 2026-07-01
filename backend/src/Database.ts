import mongoose from "mongoose";
import dotenv from 'dotenv';
import log from "./utils/logger";

const Connection = async (): Promise<void> => {
    dotenv.config();
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/career_backend`, {
            autoIndex : true
        } as mongoose.ConnectOptions);
        log.info("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export {Connection};
