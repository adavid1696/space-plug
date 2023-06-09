import Comment from '../model/commentModel.js'
import Item from '../model/itemModel.js';

export const createComment = async (req, res, next) => {

	try {
		const newComment = await new Comment({
			...req.body,
			item: req.params.id
		})
		
		const savedComment = await newComment.save();
		
		await savedComment.populate('user')

		await Item.findByIdAndUpdate( req.params.id, {
			$push: {
				comments: savedComment
			}
		})

		res.status(200).json(savedComment)
	} catch (e) {
		next(e)
	}
}

