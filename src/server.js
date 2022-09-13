import express from 'express';
import bodyParser  from 'body-parser';
import initWebRoutes  from './route/web';
import { port } from './configs';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

initWebRoutes(app);
app.listen(port,() => {
    console.log('backend running'+ port);
});

