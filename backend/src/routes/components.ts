import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get all components (catalogue)
router.get('/', async (req, res) => {
    try {
        const components = await prisma.component.findMany();
        res.json(components);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch components' });
    }
});

// Create component (catalogue)
router.post('/', async (req, res) => {
    try {
        const {
            manufacturer, name, part_number, cmm_number, classification,
            classification_date, class_linkage, compatible_aircraft_models,
            estimated_price, quotation_price
        } = req.body;

        const component = await prisma.component.create({
            data: {
                manufacturer,
                name,
                part_number,
                cmm_number,
                classification,
                classification_date: classification_date ? new Date(classification_date) : null,
                class_linkage,
                compatible_aircraft_models: compatible_aircraft_models || [],
                estimated_price: estimated_price ? Number(estimated_price) : null,
                quotation_price: quotation_price ? Number(quotation_price) : null,
            }
        });

        res.json(component);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create component' });
    }
});

export default router;
