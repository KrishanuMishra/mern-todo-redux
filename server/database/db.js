import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const Connection = () =>{
    mongoose.connect(process.env.DB);
    mongoose.connection.on('connected',()=>{
        console.log("Database connected..");
    });
    
    mongoose.connection.on('disconnected',()=>{
        console.log("Database Disconnected..");
    });

    mongoose.connection.on('error',(error)=>{
        console.log(error.message);
    })
}

export default Connection;