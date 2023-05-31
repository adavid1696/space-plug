import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		unique: true,
		required: true,
	},
	rules: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true
	},
	// startTime: {
	// 	type: String,
	// 	required: true
	// },
	// endTime: {
	// 	type: String,
	// 	required: true
	// },
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment',
	}],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	
})

export default mongoose.model("Item", ItemSchema)