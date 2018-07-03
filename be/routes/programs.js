var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
    .get('/', function (req, res) {
        db.programs.find({}, function (err, programs) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(programs);
        });
    })

    .get('/:id', function (req, res) {
        db.programs.findOne({ _id: req.params.id }, function (err, program) {
            if (err) return res.status(400).send(err);
            if (program == null) return res.status(404).send();

            return res.status(200).send(program);
        });
    })
    .post('/add', function (req, res) {
        console.log(req.body);
        var program = new db.programs(req.body);
        program.save(function (err, program) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(program);
        });
    })
    .post('/', function (req, res) {
        var program = new db.programs(req.body);
        db.programs.findOne({ name: req.body.name }, function (err, exiteNom) {
            if (exiteNom == null) {
                if (program.name == '' || program.details == '' || program.modules == []) return res.status(400).send();
                program.save(function (err, program) {
                    if (err) return res.status(400).send(err);
                    return res.status(201).send(program);
                });
            } else {
                if (err) return res.status(400).send(err);
                console.log('El nombre del Programa ya existe');
            }
        });
    })
    .put('/:id', function (req, res) {
        db.programs.update({
            _id: req.params.id
        }, {
                $set: {
                    'name': req.body.name,
                    'description': req.body.description,
                    'objective': req.body.objective,
                    'benefit': benefit,
                    'modules': modules
                }
            }).exec(function (err, page) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(page);
            })
    })
    // .delete('/:id', function (req, res) {
    //     db.programs.remove({ _id: req.params.id }, function (err, program) {
    //         if (err) return res.status(400).send(err);

    //         return res.status(200).send(program);
    //     });
    // });

module.exports = router;