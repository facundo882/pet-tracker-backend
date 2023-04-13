// Modules

import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Routes

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import postRoutes from './routes/post.routes';

// Settings

app.set('PORT', process.env.PORT || 4000);

app.use(cors());

app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);

app.get('/', (_req: Request, res: Response) => {
    res.send("hola como estas get");
})

export default app;