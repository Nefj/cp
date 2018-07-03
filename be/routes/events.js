var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
      .get('/', function (req, res) {
            var d = new Date();
            db.events.aggregate([
                  { $match: { date_start: { $gte: d } } },
                  { $lookup: { from: "programs", localField: "program_id", foreignField: "_id", as: "programs" } },
                  {
                        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$programs", 0] }, "$$ROOT"] } }
                  },
                  { $project: { programs: 0 } }
            ]).exec(function (err, events) {
                  if (err) return res.status(400).send(err);
                  return res.status(200).send(events);
            });
      })
      .get('/:id', function (req, res) {
            db.events.aggregate([
                  { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
                  { $lookup: { from: "programs", localField: "program_id", foreignField: "_id", as: "programs" } },
                  { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$programs", 0] }, "$$ROOT"] } } },
                  { $project: { programs: 0 } },
                  { $lookup: { from: "facilitators", localField: "facilitators", foreignField: "_id", as: "facilitators" } },
                  // { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$facilitators", 0] }, "$$ROOT"] } } },
                  // { $project: { facilitators: 0 } },
            ]).exec(function (err, event) {
                  if (err) return res.status(400).send(err);
                  // console.log(event[0])
                  return res.status(200).send(event);
            });

      })


      .post('/', function (req, res) {
            var event = new db.events(req.body);
            var d = new Date();
            console.log(event);
            if ((event.date_start == undefined || event.date_start < d) || event.description == '' || event.total == '' || event.programs == '') return res.status(400).send();

            addInterested();
            function addInterested() {
                  db.persons.aggregate([
                        // { $match: { date_start: { $gt: d1, $lt: d } } },
                        { $project: { interes: 1 } },
                        { $unwind: '$interes' },
                        { $match: { 'interes.programId': mongoose.Types.ObjectId(event.programs), $or: [{ 'interes.state': 0 }, { 'interes.state': 2 }, { 'interes.state': 5 }] } },
                        // { $project: { _id: 1 } },
                        // { $match: { 'interes.state': 2 } },
                        // { $match: { 'interes.state': 5 } },
                  ], function (err, persons) {
                        if (err) return res.status(400).send(err);
                        var interes = [];
                        persons.forEach(p => {
                              interes.push({ persons: p._id, state: p.interes.state })
                        });
                        event.interes = interes;
                        event.save(function (err, event) {
                              if (err) return res.status(400).send(err);
                              return res.status(201).send(event);
                        });
                  });
            }
      })

      .post('/edit', function (req, res) {
            // console.log('test')
            console.log('ESTE ES EL BODY DE QUERY');
            //modificar active
            //db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
            if (err) return console.log(err);
            //if (err) return res.status(400).send(err);

            //if (user == null) return res.sendStatus(404);

            // res.status(200).send(user);
            //});
      })
      //update inscription person that interesed to a event
      .put('/:id', function (req, res) {
            console.log(req.body);
            console.log('esto es una prueba' + req.body.name);
            db.events.update({ _id: req.body.name, 'inscriptions.person': req.body.person },
                  {
                        $set: { 'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description }
                  }).exec(function (err, off) {
                        if (err) return res.status(400).send(err);
                        //db.events.find({ _id: req.body.name, _id: { $in: req.body.person } }, function (err, event) {
                        db.events.find({ _id: req.body.name }, function (err, event) {
                              if (err) return res.status(401).send(err);
                              return res.status(201).send(event);
                        });
                        //	if (off.nModified == 0) return res.status(406).send();
                  });
      })

// .delete('/:id', function (req, res) {
//       db.events.remove({ _id: req.params.id }, function (err, event) {
//             if (err) return res.status(400).send(err);

//             return res.status(200).send(event);
//       });
// });

module.exports = router;