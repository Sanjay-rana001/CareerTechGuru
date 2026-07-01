import logger from 'pino';

// In Vercel serverless functions, pino-pretty can cause logs to be buffered or lost.
// Using standard console logs in production guarantees Vercel will capture them.
const devLogger = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

const log = process.env.NODE_ENV === 'production' 
    ? {
        info: (...args: any[]) => console.log(...args),
        error: (...args: any[]) => console.error(...args),
        warn: (...args: any[]) => console.warn(...args),
        debug: (...args: any[]) => console.debug(...args)
    } 
    : devLogger;

export default log as any;