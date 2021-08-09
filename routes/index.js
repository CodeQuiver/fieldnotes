import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // explicitly setting up __dirname per node documentation

import express from 'express';
const router = express.Router();
import { join } from 'path';
import apiRoutes from './api/index.js';

// apiRoutes == everything in the Api Folder- setting this up as separate in order to allow routes to be built out more if the app were to grow
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
	res.sendFile(join(__dirname, '../client/public/index.html'));
});

export default router;