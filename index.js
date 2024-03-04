import express from 'express';

const port = 8001;

const app = express();

app.get('/hello', (req,res) => {
	res.send('Hello!')
})

app.listen(port, () => {
	console.log(`Server start : http://localhost:${port}`);
});