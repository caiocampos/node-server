class Repository {
	constructor() {
		const AbsRepository = require('./repository/abs-repository');
		const UserRepository = require('./repository/user-repository');

		const absRepository = new AbsRepository();

		this.user = new UserRepository(absRepository);
	}
}
module.exports = Repository;