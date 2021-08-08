//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');

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

    // TODO- complete adding update ability here in future
    // updateNoteText: (req,res) => {
	// 	let id = mongoose.Types.ObjectId(req.body.recordID);	
	// 	db.Records.findOneAndUpdate(
	// 		{_id: id}, {$set: {
    //             noteText: req.body.noteText,
    //         }})
	// 		.then((record) => {res.json(record)})
	// 		.catch((err) => {res.json(err)})
	// },
};