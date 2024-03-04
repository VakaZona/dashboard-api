import express from 'express';

const port = 8001;

const app = express();

app.all('/hello', (req, res, next) => {
	console.log('All');
	next()
})

const cb = (req, res, next) => {
	console.log('CB')
	next()
}

app.route('/user')
	.get('/hello', cb, (req, res) => {
		res.send('Hello!');
	})
	.post('/hello', cb, (req, res) => {
		res.send('Hello POST!');
	});

app.listen(port, () => {
	console.log(`Server start : http://localhost:${port}`);
});