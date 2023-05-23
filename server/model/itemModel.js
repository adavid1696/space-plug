import mongoose from "mongoose";

const SpaceSchema = new mongoose.Schema({
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
	startTime: {
		type: Number,
		required: true
	},
	endTime: {
		type: Number,
		required: true
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment',

	}],
	// images: {
	// 	type: Number,
	// 	required: true
	// },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	
})

export default mongoose.model("Space", SpaceSchema)