import express from 'express';
import { getListProduct } from '../controllers/productControllers';

const router = express.Router();

const initWebRoutes=(app) =>{
    router.get('/', (req, res) =>{
       return  res.send('hello world')
    });

    router.get('/product', getListProduct )

    return app.use("/",router);

}
export default initWebRoutes