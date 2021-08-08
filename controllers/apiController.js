//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAllRecords: (req, res) => {
		db.Records
			.find({})
			.then((records) => {
				res.json(records);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createRecord: (req,res) => {
		db.Records
		.create(req.body)
		.then(record => res.json(record))
		.catch(err => res.json(err))
	},

    // TODO- add update ability here
};