'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'chirper',
    user: 'walt',
    password: 'walt'
});

connection.connect();

var getChirps = function getChirps() {
    return new Promise(function (resolve, reject) {
        connection.query('CALL readChirps() ', function (err, results, fields) {
            if (err) {
                connection.end();
                console.log(err);
                reject(err);
            };

            var result = results[0];
            result = result.map(function (item, index) {
                return {
                    id: item.id,
                    text: item.text
                };
            });
            resolve(result);
        });
    });
};

var getChirp = function getChirp(chirpid) {
    connection.query('CALL readChirps(' + chirpid + ') ', function (err, results, fields) {
        if (err) {
            connection.end();
            return console.log(err);
        }
        console.log(results);
    });
};

// let userid = 1; // this param takes in a single integer
// let chirp = 'Deathstroke kicks Batman'; // this param takes in a single text
// let location = 'Gotham City'; // this param takes in a single

var createChirp = function createChirp(chirp) {
    return new Promise(function (resolve, reject) {
        connection.query('CALL createChirps(\'' + chirp + '\')', function (err, results, fields) {
            if (err) {
                connection.end();
                console.log(err);
                reject(err);
            };
            console.log(chirp);
            resolve(chirp);
        });
    });
};

// let chirpid = 102; // this param takes a single integer
// let chirp = 'Batman attacks Robin'; // this param takes in a single text

var updateChirp = function updateChirp(chirpid, chirp) {
    connection.query('CALL updateChirps(' + chirpid + ', \'' + chirp + '\') ', function (err, results, fields) {
        if (err) {
            connection.end();
            return console.log(err);
        }
        console.log(results);
    });
};

// let chirpid = 102; //this param is a single integer

var deleteChirp = function deleteChirp(chirpid) {
    connection.query('CALL deleteChirps(' + chirpid + ') ', function (err, results, fields) {
        if (err) {
            connection.end();
            return console.log(err);
        }
        console.log(results);
    });
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};