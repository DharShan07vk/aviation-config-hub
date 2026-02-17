import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = Router();
import prisma from '../lib/prisma';

router.post('/register', async (req, res) => {
    const { email, password, full_name, role } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password_hash: hashedPassword,
                full_name,
                role: role || 'user'
            }
        });

        // Generate token
        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '24h' });

        res.json({
            user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role },
            token
        });
    } catch (e) {
        console.error("Register error:", e);
        res.status(400).json({ error: 'User already exists or check input', details: (e as Error).message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '24h' });

        res.json({
            user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role },
            token
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: 'Internal server error', details: (error as Error).message });
    }
});

export default router;
