const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

class AbsRepository {
	constructor() {
		this.db = 'node';
		this.dburi = null;
		// Get arguments
		for (let val of process.argv) {
			if (val.startsWith('dburi=')) {
				this.dburi = val.replace('dburi=', '');
				break;
			}
		}
	}
	find(collection, query, success, error) {
		MongoClient.connect(this.dburi, { useNewUrlParser: true },
			(err, client) => {
				if (err) {
					error(err);
					return;
				}
				const col = client.db(this.db).collection(collection);
				col.find(query).toArray((err, result) => {
					if (!err) {
						success(result);
					} else {
						error(err);
					}
					client.close();
				});
			});
	}
	insert(collection, obj, success, error) {
		MongoClient.connect(this.dburi, { useNewUrlParser: true },
			(err, client) => {
				if (err) {
					error(err);
					return;
				}
				const col = client.db(this.db).collection(collection);
				col.insertOne(obj, (err, result) => {
					if (!err) {
						success(result);
					} else {
						error(err);
					}
					client.close();
				});
			});
	}
	delete(collection, obj, success, error) {
		MongoClient.connect(this.dburi, { useNewUrlParser: true },
			(err, client) => {
				if (err) {
					error(err);
					return;
				}
				const col = client.db(this.db).collection(collection);
				col.deleteOne(
					{ _id: new ObjectID(obj._id) },
					(err, result) => {
						if (!err) {
							success(result);
						} else {
							error(err);
						}
						client.close();
					});
			});
	}
	update(collection, obj, success, error) {
		MongoClient.connect(this.dburi, { useNewUrlParser: true },
			(err, client) => {
				if (err) {
					error(err);
					return;
				}
				const col = client.db(this.db).collection(collection);
				col.updateOne(
					{ _id: new ObjectID(obj._id) },
					{ $set: obj.update },
					(err, result) => {
						if (!err) {
							success(result);
						} else {
							error(err);
						}
						client.close();
					});
			});
	}
}
module.exports = AbsRepository;