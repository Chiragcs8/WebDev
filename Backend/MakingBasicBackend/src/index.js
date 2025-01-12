import mongoosen from "mongoose";
import { DB_NAME } from "./constants"
import connectDB from "./db";



connectDB()















/* 
import express from 'express'

const app = express()

( async () => {
    try {
        mongoosen.connect(`${process.env.MONGODB_URI}`)
        app.on("error",() => {
            console.log("Error: ", error);
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR: ", error);
        throw error
    }
}) */