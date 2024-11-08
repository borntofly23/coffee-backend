// require("dotenv").config({path: './env'})
import dotenv from "dotenv"; //alternate to require("dotenv").config
import connectDB from "./db/index.js"; //

//alternate to require("dotenv").config
dotenv.config({
    path: './env'
})





connectDB()





















/*
FIRST APPROACH ON CONNECTION OF MONGODB WITH OUR CODE:

// function connectDB(){}

// connectDB()

// ;( async () => {} )()

    //IMPORTANT

import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: " , error)
        throw err
    }
} )()

*/  
