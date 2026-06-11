const express = require('express');
const router = express.Router();

import plantController from('../controller/plantController');

router.get('plants/', plantController.getAll);
router.post('/plants/', plantController.create);
router.delete('/plants/:id', plantController.remove);

export default router;