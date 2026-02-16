import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import aircraftRoutes from './routes/aircrafts';
import componentRoutes from './routes/components';
import serviceRoutes from './routes/services';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/auth', authRoutes);
app.use('/api/aircrafts', aircraftRoutes);
app.use('/api/components', componentRoutes);
import aircraftComponentRoutes from './routes/aircraft_components';

// ... other imports

app.use('/api/services', serviceRoutes);
app.use('/api/aircraft_components', aircraftComponentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});

export { prisma };
