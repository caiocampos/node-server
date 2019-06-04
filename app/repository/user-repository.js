class UserRepository {
	constructor(repo) {
		this.col = 'user';
		this.repository = repo;
	}
	find(query, success, error) {
		this.repository.find(this.col, query, success, error);
	}
	findAll(success, error) {
		this.repository.find(this.col, {}, success, error);
	}
	insert(obj, success, error) {
		this.repository.insert(this.col, obj, success, error);
	}
	delete(obj, success, error) {
		this.repository.delete(this.col, obj, success, error);
	}
	update(obj, success, error) {
		const upd = {
			_id: obj._id,
			update: {
				name: obj.name,
				password: obj.password,
				profession: obj.profession
			}
		};
		this.repository.update(this.col, upd, success, error);
	}
}
module.exports = UserRepository;