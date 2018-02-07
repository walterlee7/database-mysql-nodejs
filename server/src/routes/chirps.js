const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        db.GetChirps()
            .then((chirp) => {
                //console.log(chirp);
                res.send(chirp);
            }).catch((err) => {
                console.log(err);
            });
    } else {
        res.send(db.GetChirp(id));
    }
});

router.post('/', (req, res) => {
    db.CreateChirp(req.body.text);

    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    // const chirp = db.GetChirp(id);

    // if (!chirp || Object.keys(chirp).length === 0) {
    //     res.sendStatus(404);
    //     return;
    // }

    db.UpdateChirp(id, req.body.text);

    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    db.DeleteChirp(req.params.id);

    res.sendStatus(200);
});

module.exports = router;
