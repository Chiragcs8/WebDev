import mongoosen from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoosen.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`/n MongoDB Connected !! DB HOST ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MOGODB connection error: ", error);
        process.exit(1)
    }
}

export default connectDB