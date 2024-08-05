import 'reflect-metadata'; // For instantiating classes with container
import express from "express";
import sequelizeConfig from "./config/db";
import dotenv from 'dotenv';
import Routes from "./routes/router";
import { corsOption } from './config/cors';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.middleware';
import { authMiddleware } from './middlewares/auth.middleware';

dotenv.config()

const PORT = process.env.PORT;

const app = express();
app.use(cors(corsOption));
app.use(express.json());
app.use(authMiddleware);
app.use('/api', Routes);
app.use(errorHandler)

const startServer = async ():Promise<void>=>{
    try{
        await sequelizeConfig.authenticate();
        console.log("Connection to database established");
        // await sequelizeConfig.sync({force:true}); // Recreates tables every time the server is started
        // await sequelizeConfig.sync({alter:true}); // Alter tables instead of dropping them
        await sequelizeConfig.sync();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }
    catch(error){
        console.log("Error: ", error);
    }
};

startServer();