import express from 'express';
import {serverConfig} from './config/index.js'
import v1Router from './routers/v1/index.router.js';
import v2Router from './routers/v2/index.router.js';
import { genericErrorHandler } from './middlewares/error.middleware.js';
import logger from "./config/logger.config.js";
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware.js';
const app = express();

app.use(express.json());   // if anything comes in response bosy it is concerted into json first

app.use(attachCorrelationIdMiddleware);


app.use('/api/v1',v1Router); // registering all the routes and their corresponding routes with our app server object
app.use('/api/v2',v2Router);
 // this is a middleware which will handle all the errors that are thrown in the application and send a response to the client with the error message and status code
app.use(genericErrorHandler);
app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port http://localhost:${serverConfig.PORT}`);
    logger.info(`Server is running on port http://localhost:${serverConfig.PORT}`);
});