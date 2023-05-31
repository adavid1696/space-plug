import User from '../model/userModel.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res, next) => {
	
	const { password } = req.body;

	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt)

	try {
		const newUser = new User({
			...req.body,
			password: hash
		})
		
		const savedUser = await newUser.save();

		res.status(200).json(savedUser)
	} catch (e) {
		next(e)
	}
}

export const getUserItems = async (req, res, next) => {
	
	try {
		const user = await User.findById(req.params.id).populate('listedPlaces')

		res.status(200).json(user)
	} catch (e) {
		next(e)
	}
}

