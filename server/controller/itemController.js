import Item from '../model/itemModel.js'
import User from '../model/userModel.js';

export const createItem = async (req, res, next) => {
	try {
		const newItem = await new Item({
			...req.body,
			user: req.params.id
		})
		
		const savedItem = await newItem.save();

		await User.findByIdAndUpdate(req.params.id, {
			$push: {
				listedPlaces: savedItem
			}
		})

		res.status(200).json(savedItem)
	} catch (e) {
		next(e)
	}
}

export const getAllComments = async (req, res, next) => {

	try {
		const item = await Item
											.findById(req.params.id)
											.populate({
												path: 'comments',
												populate: {
													path: 'user',
													model: 'User'
												}
											});
		
		// Access the populated comments
		const comments = item.comments;
	
		res.status(200).json(comments)
	} catch (e) {
		next(e)
	}
}

export const getAllItems = async (req, res, next) => {
	
	try {
		const items = await Item.find().populate('user');
		res.status(200).json(items)
		
	} catch (e) {
		next(e)
	}
}

export const deleteItem = async (req, res, next) => {
	
	try {
		const deletedItem = await Item.findByIdAndDelete(req.params.id);
	
		res.status(200).json(deletedItem)
		
	} catch (e) {
		next(e)
	}
}
