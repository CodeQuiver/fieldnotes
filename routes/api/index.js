import express from 'express';
const router = express.Router();
import controller from '../../controllers/apiController.js';


// /api/
router.route('/').get(controller.findAllRecords);

// /api/:data  route to create a new record
router.route('/').post(controller.createRecord);

export default router;