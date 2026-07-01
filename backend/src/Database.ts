import * as admin from 'firebase-admin';
import dotenv from 'dotenv';
import log from "./utils/logger";
import fs from 'fs';
import path from 'path';

dotenv.config();

let db: admin.firestore.Firestore;

const Connection = async (): Promise<void> => {
    try {
        const serviceAccountPath = path.resolve(__dirname, '../serviceAccountKey.json');
        if (!fs.existsSync(serviceAccountPath)) {
            log.error('serviceAccountKey.json not found. Please provide valid Firebase credentials.');
            process.exit(1);
        }

        const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });

        db = admin.firestore();
        log.info("Connected to Firebase Firestore");
    } catch (error) {
        console.error('Error connecting to Firebase:', error);
        process.exit(1);
    }
};

export { Connection, db };
