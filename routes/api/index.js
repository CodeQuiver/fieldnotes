const router = require('express').Router();
import controller from '../../controllers/apiController';

module.exports = router;

// /api/
router.route('/').get(controller.findAllRecords);

// /api/:data  route to create a new record
router.route('/').post(controller.createRecord);