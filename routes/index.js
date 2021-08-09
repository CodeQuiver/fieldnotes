// apiRoutes == everything in the Api Folder
// setting all routes to start with /api and then whats in api will follow hence the const apiRoutes
// basically all routes in the api folder will start with /api

import express from 'express';
const router = express.Router();
import { join } from 'path';
import apiRoutes from './api/index.js';
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
	res.sendFile(join(__dirname, '../client/build/index.html'));
});

export default router;