class UserService {
	constructor(repo, msg) {
		this.repository = repo;
		this.msg = msg;
	}
	find(query, success, error) {
		this.repository.find(query, success, error);
	}
	findAll(success, error) {
		this.repository.findAll(success, error);
	}
	insert(obj, success, error) {
		if (!obj) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.insert(obj, success, error);
	}
	delete(obj, success, error) {
		if (!obj) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.delete(obj, success, error);
	}
	update(obj, success, error) {
		if (!obj) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.update(obj, success, error);
	}
}
module.exports = UserService;