import 'reflect-metadata'; // For instantiating classes with container
import express from "express";
import sequelizeConfig from "./config/db";
import dotenv from 'dotenv';
import Routes from "./routes/router";

dotenv.config()

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api', Routes)

const startServer = async ():Promise<void>=>{
    try{
        await sequelizeConfig.authenticate();
        console.log("Connection to database established");
        await sequelizeConfig.sync({force:true}); // Recreates tables every time the server is started
        // await sequelizeConfig.sync();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }
    catch(error){
        console.log("Error: ", error);
    }
};

startServer();