import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	listedPlaces: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Item'
	}],
	bookedPlaces: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Item'
	}]
})

export default mongoose.model("User", UserSchema)