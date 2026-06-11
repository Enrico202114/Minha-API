import express from 'express';
import cors from 'cors';

const plantRoutes = require ('./src/routes/plantRoutes.js');
import typeRoutes from'./src/routes/typeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(plantRoutes);

app.use('/plants', plantRoutes);
app.use('/types', typeRoutes);

export default app;