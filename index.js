import express from 'express';

const port = 8001;

const app = express();

app.get('/hello', (req, res) => {
	res.status(404);
	res.end()
});

app.listen(port, () => {
	console.log(`Server start : http://localhost:${port}`);
});