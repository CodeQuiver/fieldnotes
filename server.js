import express, { static } from 'express';
const app = express();
import { Promise, connect } from 'mongoose';
import routes from './routes';

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (may want to restrict to prod but uncertain)
// if (process.env.NODE_ENV === "production") {
  app.use(static("client/build"));
// }

// Define API routes
app.use(routes);

// set the MONGODB_URI as an env property to allow remote deployment configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/fieldNotesDb';

Promise = global.Promise;

connect(MONGODB_URI,{ useNewUrlParser: true });

app.listen(PORT, function() {
	console.log(`Server running on port ${PORT}, and connected to db at ${MONGODB_URI}`);
});
