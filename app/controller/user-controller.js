class UserController {
	constructor(app, service) {
		const path = '/user';

		app.get(path + '/', function (req, res) {
			service.findAll(data => {
				res.json(data);
			}, err => {
				console.log(err);
				res.status(400).json(err);
			});
		});
		app.get(path + '/:name', function (req, res) {
			service.find({ name: req.params.name }, data => {
				res.json(data);
			}, err => {
				console.log(err);
				res.status(400).json(err);
			});
		});
		app.post(path + '/', function (req, res) {
			service.insert(req.body, data => {
				res.json(data);
			}, err => {
				console.log(err);
				res.status(400).json(err);
			});
		});
		app.delete(path + '/', function (req, res) {
			service.delete(req.body, data => {
				res.json(data);
			}, err => {
				console.log(err);
				res.status(400).json(err);
			});
		});
		app.put(path + '/', function (req, res) {
			service.update(req.body, data => {
				res.json(data);
			}, err => {
				console.log(err);
				res.status(400).json(err);
			});
		});
	}
}
module.exports = UserController;