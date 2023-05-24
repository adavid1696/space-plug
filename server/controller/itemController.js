import Item from '../model/itemModel.js'

export const createItem = async (req, res, next) => {

	try {
		const newItem = await new Item({
			...req.body,
			user: req.params.id
		})
		
		const savedItem = await newItem.save();

		res.status(200).json(savedItem)
	} catch (e) {
		next(e)
	}
}

export const getAllComments = async (req, res, next) => {

	try {
		const item = await Item.findById(req.params.id).populate('comments');
		// await item.populateComments();

		// Access the populated comments
		const comments = item.comments;
		res.status(200).json(comments)
		console.log(comments)
	} catch (e) {
		next(e)
	}
}

export const getAllItems = async (req, res, next) => {
	
	try {
		const items = await Item.find();
	
		res.status(200).json(items)
		
	} catch (e) {
		next(e)
	}
}