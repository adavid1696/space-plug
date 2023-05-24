// import bcrypt from 'bcrypt'
import User from '../model/userModel.js'

export const login = async (req, res, next) => {

	const { email, password } = req.body;
	
	try {
		const user = await User.findOne({email, password});

		if(!user){
			res.status(500).json('Incorrect email or password! Try again.')
		}

		res.status(200).json("Succesfull Login!")
	} catch (e) {
		next(e)
	}

}