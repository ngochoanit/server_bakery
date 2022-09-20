import express from 'express';
import { getListProduct } from '../controllers/productControllers';
import { handleLogin } from '../controllers/private/userController'
import { isAuth } from '../middleware/AuthMiddleware';

const router = express.Router();

const initWebRoutes=(app) =>{
    router.get('/', (req, res) =>{
       return  res.send('hello world')
    });
    router.post('/admin/login', handleLogin)

    //private routes
    router.use(isAuth);


    return app.use("/",router);
}
export default initWebRoutes