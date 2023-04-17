import express, { Router } from 'express';

const router: Router = express.Router();

import { getUsers, getUser, deleteUser, updateUser } from '../controller/user.controller';

router
    .get('/', getUsers)
    .get('/:username', getUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)

export default router;