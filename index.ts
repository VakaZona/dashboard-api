import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8001;

const app = express();

app.use((req, res, next) => {
	console.log('Time', Date.now())
	next();
});

app.get('/hello', (req, res) => {
	res.status(404);
	res.end()
});

app.use('/users', userRouter)

app.listen(port, () => {
	console.log(`Server start : http://localhost:${port}`);
});