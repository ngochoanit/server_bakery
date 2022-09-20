import express from 'express';
import bodyParser  from 'body-parser';
import initWebRoutes  from './route/web';
import { port } from './configs';
import { connectDB } from './configs/connectDB';

connectDB()
    .then(() => console.log('Connected successfully to database server'))
    .then(() => bootServer())
    .catch(error => {
        console.log(error)
        process.exit(1)
    })

const bootServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    connectDB();
    initWebRoutes(app);
    app.listen(port,() => {
        console.log('backend running'+ port);
    });
}
