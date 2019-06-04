class Service {
	constructor() {
		const Repository = require('./repository');
		const UserService = require('./service/user-service');

		const repo = new Repository();

		const msg = {};
		msg.emptyRequest = { message: 'Empty request body' };

		this.user = new UserService(repo.user, msg);
	}
}
module.exports = Service;