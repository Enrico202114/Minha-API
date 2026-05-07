import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Lista de tipos' });
});

export default router;