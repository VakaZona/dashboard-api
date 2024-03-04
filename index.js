import express from 'express';
import { userRouter } from './users/users.js';

const port = 8001;

const app = express();

app.get('/hello', (req, res) => {
	res.status(404);
	res.end()
});

app.use('/users', userRouter)

app.listen(port, () => {
	console.log(`Server start : http://localhost:${port}`);
});