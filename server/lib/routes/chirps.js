'use strict';

var express = require('express');
var db = require('../db');

var router = express.Router();

router.get('/:id?', function (req, res) {
    var id = req.params.id;

    if (!id) {
        db.GetChirps().then(function (chirp) {
            //console.log(chirp);
            res.send(chirp);
        }).catch(function (err) {
            console.log(err);
        });
    } else {
        res.send(db.GetChirp(id));
    }
});

router.post('/', function (req, res) {
    db.CreateChirp(req.body.text);

    res.sendStatus(200);
});

router.put('/:id', function (req, res) {
    var id = req.params.id;
    // const chirp = db.GetChirp(id);

    // if (!chirp || Object.keys(chirp).length === 0) {
    //     res.sendStatus(404);
    //     return;
    // }

    db.UpdateChirp(id, req.body.text);

    res.sendStatus(200);
});

router.delete('/:id', function (req, res) {
    db.DeleteChirp(req.params.id);

    res.sendStatus(200);
});

module.exports = router;