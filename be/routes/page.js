var express = require('express');
var db = require('../models/db');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');

router
	.get('/', function (req, res) {
		db.pages.find({}, function (err, pages) {
			if (err) return res.status(400).send(err);

			return res.status(200).send(pages);
		});
	})

	.put('/home/inicioF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		console.log(body);
		fs.readFile(req.files.fileKey.path, function read(err, data) {
			if (err) {
				throw err;
			}
			content = data;
			fs.writeFile('./public/' + body.inicio.photo, content, function (err) {
				if (err) {
					return console.log(err);
				}
				console.log("The file was saved!");
				db.pages.update({
					_id: req.params.id
				}, {
						$set: {
							'home.inicio.line1': body.inicio.line1,
							'home.inicio.line2': body.inicio.line2,
							'home.inicio.line3': body.inicio.line3
						}
					}).exec(function (err, page) {
						if (err) return res.status(400).send(err);
						console.log(page);
						return res.status(200).send(page);
					})
			});
		});

	})
	.put('/home/inicio/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.inicio.line1': req.body.line1,
					'home.inicio.line2': req.body.line2,
					'home.inicio.line3': req.body.line3
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				console.log(page);
				return res.status(200).send(page);
			})
	})
	.put('/home/services/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.services.tittle': req.body.tittle,
					'home.services.services': req.body.services
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/home/our/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.our.line1': req.body.line1,
					'home.our.line2': req.body.line2,
					'home.our.list': req.body.list
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/home/ourF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		// console.log(req.files);
		fs.readFile(req.files.fileKey.path, function read(err, data) {
			if (err) {
				throw err;
			}
			content = data;
			fs.writeFile('./public/' + body.our.photo, content, function (err) {
				if (err) {
					return console.log(err);
				}
				console.log("The file was saved!");
				db.pages.update({
					_id: req.params.id
				}, {
						$set: {
							'home.our.line1': body.our.line1,
							'home.our.line2': body.our.line2,
							'home.our.list': body.our.list
						}
					}).exec(function (err, page) {
						if (err) return res.status(400).send(err);
						return res.status(200).send(page);
					})
			});
		});

	})

	.put('/home/events/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.events.line1': req.body.line1,
					'home.events.line2': req.body.line2,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/home/team/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.team.tittle': req.body.tittle,
					'home.team.member': req.body.member,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})

	.put('/home/teamF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		for (let i = 0; i < body.fileName.length; i++) {
			// console.log(req.files);
			// console.log(body.fileName[i]);
			// console.log(req.files[body.fileName[i]].path);
			fs.readFile(req.files[body.fileName[i]].path, function read(err, data) {
				if (err) {
					throw err;
				}
				content = data;
				// console.log(body.team.member);
				j = 0;
				x = false;
				do {
					if (body.fileName[i] == body.team.member[j]._id) {
						x = true;
						// console.log(body.team.member[j].photo)
						fs.writeFile('./public/' + body.team.member[j].photo, content, function (err) {
							if (err) return console.log(err);
							if (i == body.fileName.length - 1) {
								db.pages.update({
									_id: req.params.id
								}, {
										$set: {
											'home.team.tittle': body.team.tittle,
											'home.team.member': body.team.member,
										}
									}).exec(function (err, page) {
										if (err) return res.status(400).send(err);
										return res.status(200).send(page);
									})
								console.log("finish");
							} else console.log('The file was saved!')
						});
					}
					j++;
				} while (j < body.team.member.length || !x);
			});
			// }
		}
	})
	.put('/home/galery/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.galery.tittle': req.body.tittle,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/home/galeryF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		for (let i = 0; i < body.fileName.length; i++) {
			fs.readFile(req.files[body.fileName[i]].path, function read(err, data) {
				if (err) {
					throw err;
				}
				content = data;
				j = 0;
				x = false;
				do {
					if (body.fileName[i] == body.galery.photos[j]._id) {
						x = true;
						// console.log(body.galery.photos[j].photo)
						fs.writeFile('./public/' + body.galery.photos[j].photo, content, function (err) {
							if (err) return console.log(err);
							if (i == body.fileName.length - 1) {
								db.pages.update({
									_id: req.params.id
								}, {
										$set: {
											'home.galery.tittle': body.galery.tittle,
										}
									}).exec(function (err, page) {
										if (err) return res.status(400).send(err);
										return res.status(200).send(page);
									})
								console.log("finish");
							} else console.log('The file was saved!')
						});
					}
					j++;
				} while (j < body.galery.photos.length || !x);
			});
			// }
		}
	})

	.put('/home/clients/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'home.clients.tittle': req.body.tittle,
					'home.clients.line': req.body.line,
					'home.clients.list': req.body.list,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/home/clientsF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		for (let i = 0; i < body.fileName.length; i++) {
			fs.readFile(req.files[body.fileName[i]].path, function read(err, data) {
				if (err) {
					throw err;
				}
				content = data;
				j = 0;
				x = false;
				do {
					if (body.fileName[i] == body.clients.list[j]._id) {
						x = true;
						fs.writeFile('./public/' + body.clients.list[j].photo, content, function (err) {
							if (err) return console.log(err);
							if (i == body.fileName.length - 1) {
								db.pages.update({
									_id: req.params.id
								}, {
										$set: {
											'home.clients.tittle': body.clients.tittle,
										}
									}).exec(function (err, page) {
										if (err) return res.status(400).send(err);
										return res.status(200).send(page);
									})
								console.log("finish");
							} else console.log('The file was saved!')
						});
					}
					j++;
				} while (j < body.clients.list.length || !x);
			});
			// }
		}
	})



	.put('/somos/inicio/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'somos.inicio.line': req.body.line,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/somos/inicioF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		fs.readFile(req.files.fileKey.path, function read(err, data) {
			if (err) {
				throw err;
			}
			content = data;
			fs.writeFile('./public/' + body.inicio.photo, content, function (err) {
				if (err) {
					return console.log(err);
				}
				db.pages.update({
					_id: req.params.id
				}, {
						$set: {
							'somos.inicio.line': body.inicio.line,
						}
					}).exec(function (err, page) {
						if (err) return res.status(400).send(err);
						return res.status(200).send(page);
					})
			});
		});

	})
	.put('/somos/version/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'somos.version.tittle': req.body.tittle,
					'somos.version.mision': req.body.mision,
					'somos.version.vision': req.body.vision,
					'somos.version.valores': req.body.valores,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/interes/inicio/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id
		}, {
				$set: {
					'interes.inicio.line': req.body.line,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/interes/inicioF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		fs.readFile(req.files.fileKey.path, function read(err, data) {
			if (err) {
				throw err;
			}
			content = data;
			fs.writeFile('./public/' + body.inicio.photo, content, function (err) {
				if (err) {
					return console.log(err);
				}
				db.pages.update({
					_id: req.params.id
				}, {
						$set: {
							'interes.inicio.line': body.inicio.line,
						}
					}).exec(function (err, page) {
						if (err) return res.status(400).send(err);
						return res.status(200).send(page);
					})
			});
		});

	})
	.put('/interes/list/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id,
			'interes.list._id': req.body._id
		}, {
				$set: {
					'interes.list.$.tittle': req.body.tittle,
					'interes.list.$.description': req.body.description,
					'interes.list.$.block': req.body.block,
					'interes.list.$.block2': req.body.block2,
					'interes.list.$.block3': req.body.block3,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				console.log(page);
				return res.status(200).send(page);
			})
	})

	.put('/home/listF/:id', multipartMiddleware, function (req, res) {
		var body = JSON.parse(req.body.body);
		for (let i = 0; i < body.fileName.length; i++) {
			fs.readFile(req.files[body.fileName[i]].path, function read(err, data) {
				if (err) {
					throw err;
				}
				content = data;
				// j = 0;
				// x = false;
				// do {
				if (body.fileName[i] == body.list._id) {
					// x = true;
					// console.log(body.list.photo)
					fs.writeFile('./public/' + body.list.photo, content, function (err) {
						if (err) return console.log(err);
						if (i == body.fileName.length - 1) {
							db.pages.update({
								_id: req.params.id,
								'interes.list._id': body.list._id
							}, {
									$set: {
										'interes.list.$.tittle': body.list.tittle,
										'interes.list.$.description': body.list.description,
										'interes.list.$.block': body.list.block,
										'interes.list.$.block2': body.list.block2,
										'interes.list.$.block3': body.list.block3,
									}
								}).exec(function (err, page) {
									if (err) return res.status(400).send(err);
									console.log(page);
									return res.status(200).send(page);
								})
							console.log("finish");
						} else console.log('The file was saved!')
					});
				}
				// 	j++;
				// } while (j < body.clients.list.length || !x);
			});
			// }
		}
	})

	.put('/program/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id,
		}, {
				$set: {
					'program.tittle': req.body.tittle,
					'program.line': req.body.line,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/taller/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id,
		}, {
				$set: {
					'taller.tittle': req.body.tittle,
					'taller.line': req.body.line,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})
	.put('/consultoria/:id', function (req, res) {
		db.pages.update({
			_id: req.params.id,
		}, {
				$set: {
					'consultoria.tittle': req.body.tittle,
					'consultoria.line': req.body.line,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})




module.exports = router;