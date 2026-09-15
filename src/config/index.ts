// this file cantains all the basic configuration logic for the app server to work
import dotenv from 'dotenv'

export function loadEnv(){
    dotenv.config();
}
loadEnv();

export const serverConfig = {
    PORT: Number(process.env.PORT) || 3001
}
