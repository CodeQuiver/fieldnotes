import mongoose from 'mongoose';
import db from '../models/fieldNotesDb.js';
mongoose.Promise = global.Promise;

// This file empties the Fruits collection and inserts the Fruits below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactBoilerplate');

const itemSeed = [
	{
		personName: '',
		quantity: '31',
		type: 'Fruit',
		image: './images/apple.jpg'
	}
];

db.Fruit
	.deleteMany({})
	.then(() => db.Fruit.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});