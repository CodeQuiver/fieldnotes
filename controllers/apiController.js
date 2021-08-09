import db from '../models/fieldNotesDb.js'

 const controller = {
	findAllRecords: (req, res) => {
		db.find({})
			.then((records) => {
				res.json(records);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createRecord: (req,res) => {
		db.create(req.body)
		.then(record => res.json(record))
		.catch(err => res.json(err))
	},
};

export default controller;