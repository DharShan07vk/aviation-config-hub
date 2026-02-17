import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';

const router = Router();
import prisma from '../lib/prisma';

// Get all aircrafts for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
    try {
        const userId = (req as any).user.userId;
        const aircrafts = await prisma.aircraft.findMany({
            where: {
                user_id: userId
            },
            include: {
                components: true
            }
        });
        res.json(aircrafts);
    } catch (error) {
        console.error("Error fetching aircrafts:", error);
        console.error("Error fetching aircrafts:", error);
        res.status(500).json({ error: 'Failed to fetch aircrafts', details: (error as Error).message });
    }
});

// Create aircraft
router.post('/', authenticateToken, async (req, res) => {
    try {
        const {
            model, msn, registration_number, manufacture_date, delivery_date,
            flight_hours, flight_cycles, engines_count, status, country
        } = req.body;

        // Get user id from verified token
        const user_id = (req as any).user.userId;

        const aircraft = await prisma.aircraft.create({
            data: {
                model,
                msn,
                registration_number,
                manufacture_date: manufacture_date ? new Date(manufacture_date) : null,
                delivery_date: delivery_date ? new Date(delivery_date) : null,
                flight_hours: Number(flight_hours),
                flight_cycles: Number(flight_cycles),
                engines_count: Number(engines_count),
                status,
                country,
                user_id
            }
        });
        res.json(aircraft);
    } catch (error) {
        console.error("Error creating aircraft:", error);
        res.status(500).json({ error: 'Failed to create aircraft', details: (error as Error).message });
    }
});

export default router;
