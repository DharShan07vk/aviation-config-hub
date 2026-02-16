import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        const services = await prisma.service.findMany();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            aircraft_model,
            task_name,
            mpd_amm_task_ids,
            task_card_ref,
            description,
            assigned_component_id,
            zones,
            estimated_manhours,
            estimated_price,
            quotation_price,
            interval_threshold,
            repeat_interval,
        } = req.body;

        const service = await prisma.service.create({
            data: {
                aircraft_model,
                task_name,
                mpd_amm_task_ids,
                task_card_ref,
                description,
                assigned_component_id,
                zones: zones || [],
                estimated_manhours: estimated_manhours ? Number(estimated_manhours) : null,
                estimated_price: estimated_price ? Number(estimated_price) : null,
                quotation_price: quotation_price ? Number(quotation_price) : null,
                interval_threshold: interval_threshold ? Number(interval_threshold) : null,
                repeat_interval: repeat_interval ? Number(repeat_interval) : null,
            }
        });
        res.json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create service' });
    }
});

export default router;
