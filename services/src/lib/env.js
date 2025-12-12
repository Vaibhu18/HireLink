import "dotenv/config"

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNIN_KEY: process.env.INNGEST_SIGNIN_KEY,
}