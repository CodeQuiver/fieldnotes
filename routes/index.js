// apiRoutes == everything in the Api Folder
// setting all routes to start with /api and then whats in api will follow hence the const apiRoutes
// basically all routes in the api folder will start with /api

const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;