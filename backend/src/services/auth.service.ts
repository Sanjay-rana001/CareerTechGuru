import { IAuthUser, ILoginResponse, ILoginUser } from "../interfaces/auth.interface";
import bcrypt from 'bcrypt';
import { db } from '../Database';
import jwt from 'jsonwebtoken';
import { generate } from "otp-generator";
import EmailVerificationProvider from "../config/email.config";
import dotenv from 'dotenv'

dotenv.config();

class AuthService {
    private generateOtp() {
        return generate(6,{ digits : true, lowerCaseAlphabets : false, upperCaseAlphabets : false, specialChars : false})
    }

    private setOtpExpiration (minutes : number) {
        const expiration = new Date();
        expiration.setMinutes(expiration.getMinutes() + minutes);
        return expiration;
    }
    async addUser(userDetails: IAuthUser): Promise<ILoginResponse | null> {
        try {
            const emailSnapshot = await db.collection('AuthUsers').where('email', '==', userDetails.email).limit(1).get();
            if (!emailSnapshot.empty) {
                return { message: 'Email already exists', loading: false, token: '', user: null };
            }
    
            const mobileSnapshot = await db.collection('AuthUsers').where('mobile', '==', userDetails.mobile).limit(1).get();
            if (!mobileSnapshot.empty) {
                return { message: 'Mobile number already exists', loading: false, token: '', user: null };
            }
    
            const resetOtp = this.generateOtp();
            const otpExpiration = this.setOtpExpiration(10);
            const hashedPassword = bcrypt.hashSync(userDetails.password, 10);
        
            const newUserData = {
                ...userDetails,
                password: hashedPassword,
                otp: resetOtp,
                otpExpiration: otpExpiration.toISOString(),
                isEmailVerified: false,
                isMobileOtpVerified: false,
                otpVerified: false,
                emailResendOtp: false,
                mobileResendOtp: false,
                role: userDetails.role || 'user',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const docRef = await db.collection('AuthUsers').add(newUserData);
            const userResponse = { ...newUserData, id: docRef.id } as unknown as IAuthUser;
    
            await EmailVerificationProvider(userDetails.email, resetOtp);
    
            return {
                message: 'User added successfully',
                loading: false,
                token: '',
                user: userResponse,
            };
        } catch (error) {
            console.error("Error adding user:", error);
            return null;
        }
    }
    async verifyUserEmail(otpToken: string): Promise<ILoginResponse> {
        try {
            const snapshot = await db.collection('AuthUsers').where('otp', '==', otpToken).limit(1).get();
            if (snapshot.empty) {
                return { message: 'User not found', loading: false, token: '', user: null };
            }
    
            const doc = snapshot.docs[0];
            const userData = doc.data();

            if (userData.otpExpiration && new Date() > new Date(userData.otpExpiration)) {
                return { message: 'OTP has expired', loading: false, token: '', user: null };
            }
    
            await doc.ref.update({
                otp: "",
                isEmailVerified: true,
                updatedAt: new Date().toISOString()
            });
    
            const token = jwt.sign({ id: doc.id, email: userData.email, role : userData.role }, process.env.JWT_SECRET as string, { expiresIn: '48h' });
            return { message: 'Email verified successfully', loading: false, token, user: { id: doc.id, ...userData } as unknown as IAuthUser };
        } catch (error) {
            console.error('Error in verifying email:', error);
            return { message: 'Internal server error', loading: false, token: '', user: null };
        }
    }
    async authenticateUser(loginCredentials: ILoginUser): Promise<ILoginResponse> {
        try {
            const { email, password } = loginCredentials;
            const snapshot = await db.collection('AuthUsers').where('email', '==', email).limit(1).get();

            if (snapshot.empty) {
                return { message: 'User not found', loading: false, token: '', user: null };
            }

            const doc = snapshot.docs[0];
            const userData = doc.data();

            const isPasswordValid = bcrypt.compareSync(password, userData.password);
            if (!isPasswordValid) {
                return { message: 'Invalid password', loading: false, token: '', user: null };
            }

            const token = jwt.sign({ id: doc.id, email: userData.email, role : userData.role }, process.env.JWT_SECRET as string, { expiresIn: '48h' });
            return { message: 'Login successful', loading: false, token, user: { id: doc.id, ...userData } as unknown as IAuthUser };
        } catch (error) {
            console.error("Error authenticating user:", error);
            return { message: 'Internal server error', loading: false, token: '', user: null };
        }
    }

    async forgotPassword(email: string): Promise<string> {
        try {
            const snapshot = await db.collection('AuthUsers').where('email', '==', email).limit(1).get();
            if (snapshot.empty) {
                return 'User not found';
            }
            const doc = snapshot.docs[0];

            const resetOtp = this.generateOtp();
            const otpExpiration = this.setOtpExpiration(10);

            await doc.ref.update({
                otp: resetOtp,
                otpExpiration: otpExpiration.toISOString(),
                updatedAt: new Date().toISOString()
            });

            await EmailVerificationProvider(email, resetOtp);
            return 'OTP sent to email';
        } catch (error) {
            console.error('Error in forgot password:', error);
            return 'Internal server error';
        }
    }
    async verifyOtpForPasswordReset(otp: string): Promise<string> {
        try {
            const snapshot = await db.collection('AuthUsers').where('otp', '==', otp).limit(1).get();
            if (snapshot.empty) {
                return 'Invalid OTP';
            }

            const doc = snapshot.docs[0];
            const userData = doc.data();

            if (userData.otpExpiration && new Date() > new Date(userData.otpExpiration)) {
                return 'OTP has expired';
            }
            console.log("this is ", otp)
            const otpVerifiedExpiration = this.setOtpExpiration(10); 
            
            await doc.ref.update({
                otp: "",
                otpVerified: true,
                otpExpiration: otpVerifiedExpiration.toISOString(),
                updatedAt: new Date().toISOString()
            });

            return 'OTP verified successfully';
        } catch (error) {
            console.error('Error in verifying OTP:', error);
            return 'Internal server error';
        }
    }
    async resetPassword(email: string, newPassword: string): Promise<string> {
        try {
            const snapshot = await db.collection('AuthUsers').where('email', '==', email).limit(1).get();
            if (snapshot.empty) {
                return 'User not found';
            }

            const doc = snapshot.docs[0];
            const userData = doc.data();

            if (!userData.otpVerified) { 
                return 'OTP verification required';
            }

            const hashedPassword = bcrypt.hashSync(newPassword, 10);
            
            await doc.ref.update({
                password: hashedPassword,
                otpVerified: false,
                updatedAt: new Date().toISOString()
            });

            return 'Password reset successfully';
        } catch (error) {
            console.error('Error in resetting password:', error);
            return 'Internal server error';
        }
    }
    
}

export const authServices = new AuthService();
