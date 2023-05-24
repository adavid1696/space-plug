import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

// Routes
import userRoute from './route/userRoute.js'
import itemRoute from './route/itemRoute.js'
import authRoute from './route/authRoute.js'

const app = express();
const PORT = 3001;
dotenv.config();
app.use(cors({
	origin: "http://localhost:3000"
}))
app.use(express.json());

// db connection
const connect = async () => {
	await mongoose.connect(process.env.MONGO_URL)
	console.log('connected to mongoDB')
}

// middleware

app.use('/user', userRoute)
app.use('/item', itemRoute)
app.use('/auth', authRoute)

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