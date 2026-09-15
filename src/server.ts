import express from 'express';
import {serverConfig} from './config/index.js'
import pingRouter  from './routers/ping.router.js';
const app = express();

app.use(pingRouter); // registering all the routes and their corresponding routes with our app server object

console.log(`Envirement variables loaded`);
app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`);
});