import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join(process.cwd(), '.env' )});

// const envFilePath = path.join(process.cwd(), '.env');
// dotenv.config({ path: envFilePath });

export default {
    port: process.env.PORT,
    database_url: process.env.DATABSE_URL
}