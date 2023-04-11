import express, { Router } from 'express';

const router: Router = express.Router();

router
    .get('/', (_req, res) => {
        res.send('Get Users');
    })
    .post('/', (_req, res) => {
        res.send('Post Users');
    })

export default router;