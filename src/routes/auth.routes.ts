import Express, { Router } from "express";
import { signup, signin, profile } from '../controller/auth.controller';
import { tokenValidation } from '../middlewares/verifyToken.middleware';

const router: Router = Express.Router();

router
    .post('/signin', signin)
    .post('/signup', signup)
    .get('/profile', tokenValidation, profile)

export default router;