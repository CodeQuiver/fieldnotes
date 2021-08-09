import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const recordSchema = new Schema({
	personName: {
		type: String,
		required: true
	},
	noteText: {
		type: String,
		required: false
	},
	timeStamp: {
		type: Date,
		required: false
	},
	userName: {
		type: String,
		required: true
	}
});

const Records = model('Records', recordSchema);

export default Records;