import express from 'express';
const app = express();
import mongoose from 'mongoose';
const connect = mongoose.connect;
import routes from './routes/index.js';

const PORT = process.env.PORT || 3001;

app.use(express.json()); // replaces deprecated bodyparser middleware

// Serve up static assets
  app.use(express.static("client/build"));

// Define API routes
app.use(routes);

// set the MONGODB_URI as an env property to allow remote deployment configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/fieldNotesDb';

connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, function() {
	console.log(`Server running on port ${PORT}, and connected to db at ${MONGODB_URI}`);
});
