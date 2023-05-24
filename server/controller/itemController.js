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

