import { Timestamp } from 'mongodb';
import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

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
		type: Timestamp,
		required: false
	},
	userName: {
		type: String,
		required: true
	}
});

const Records = model('Records', recordSchema);

export default Records;