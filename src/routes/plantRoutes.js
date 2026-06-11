import express from 'express';

import * as plantController from '../controller/plantController.js';

const router = express.Router();

router.get('/', plantController.getAll);

router.post('/', plantController.create);

router.delete('/:id', plantController.remove);

export default router;