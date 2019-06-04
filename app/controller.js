const Service = require('./service');
const UserController = require('./controller/user-controller');

class Controller {
	constructor(express) {
		const app = express;
		const serv = new Service();
		new UserController(app, serv.user);
	}
}
module.exports = Controller;