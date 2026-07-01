import AuthUser from './src/models/auth.model'

declare global {
    namespace Express {
        interface Request {
            user?: AuthUser;
        }
    }
}