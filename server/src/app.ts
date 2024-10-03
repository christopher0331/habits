import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import habitRoutes from './routes/habits';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);

export default app;