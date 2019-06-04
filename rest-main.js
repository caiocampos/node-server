const express = require('express');
const Controller = require('./app/controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new Controller(app);

const server = app.listen(8081, function () {
	const fullAddress = server.address();
	const host = fullAddress.address === '::' ? 'localhost' : fullAddress.address;
	const port = server.address().port;
	console.log("Listening at http://%s:%s", host, port);
});