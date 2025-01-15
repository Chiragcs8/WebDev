// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoosen from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MOGO db connection failed !!!",err);
})















/* 
import express from 'express'

const app = express()

( async () => {
    try {
        await mongoosen.connect(`${process.env.MONGODB_URI}`)
        app.on("error",(error) => {
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR: ", error);
        throw error
    }
}) */