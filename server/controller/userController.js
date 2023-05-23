import User from '../model/userModel.js'

export const createUser = async (req, res, next) => {
	
	try {
		const newUser = new User(req.body)
		console.log(newUser)
		const savedUser = await newUser.save();
		res.status(200).json(savedUser)
	} catch (e) {
		next(e)
	}
}

