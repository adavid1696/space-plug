import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// Routes
import userRoute from './route/userRoute.js'

const app = express();
const PORT = 3001;
dotenv.config();

// db connection
const connect = async () => {
	await mongoose.connect(process.env.MONGO_URL)
	console.log('connected to mongoDB')
}

// middleware
app.use(express.json())

app.use('/user', userRoute)

// error handling
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	})
})

// start server
app.listen(PORT, () => {
	connect()
	console.log(`Server is running on port ${PORT}`)
})