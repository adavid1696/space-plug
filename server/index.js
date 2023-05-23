import express from 'express';

const app = express();
const PORT = 3001;

app.use(('/'), (req, res) => res.status(200).send('sup'))

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})