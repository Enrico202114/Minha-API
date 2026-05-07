import express, { Router } from 'express';
const router = express.Router();

router.get ('/', (req, res) => {
    res.json({ message: `Rota de plantas funcionado🌱`});
});

export default router;