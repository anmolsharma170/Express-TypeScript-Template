import express from 'express';
import {serverConfig} from './config/index.js'
import v1Router from './routers/v1/index.router.js';
import v2Router from './routers/v2/index.router.js';
import { genericErrorHandler } from './middlewares/error.middleware.js';
const app = express();

app.use(express.json());   // if anything comes in response bosy it is concerted into json first

app.use('/api/v1',v1Router); // registering all the routes and their corresponding routes with our app server object
app.use('/api/v2',v2Router);
app.use(genericErrorHandler);
app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port http://localhost:${serverConfig.PORT}`);
});