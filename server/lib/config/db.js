'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.empty = exports.rows = exports.row = exports.pool = undefined;

var _mysql = require('mysql');

var _util = require('util');

var pool = (0, _mysql.createPool)({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'DatabaseName'
});

function rows(procedureName, args) {
    return callProcedure(procedureName, args).then(function (resultsets) {
        return resultsets[0];
    });
}

function row(procedureName, args) {
    return callProcedure(procedureName, args).then(function (resultsets) {
        return resultsets[0][0];
    });
}

function empty(procedureName, args) {
    return callProcedure(procedureName, args).then(function () {
        return;
    });
}

function callProcedure(procedureName, args) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                var placeholders = '';
                if (args && args.length > 0) {
                    for (var i = 0; i < args.length; i++) {
                        if (i === args.length - 1) {
                            // if we are on the last argument in the array
                            placeholders += '?';
                        } else {
                            placeholders += '?,';
                        }
                    }
                }
                var callString = 'CALL ' + procedureName + '(' + placeholders + ');'; // CALL GetChirps();, or CALL InsertChirp(?,?,?);
                connection.query(callString, args, function (err, resultsets) {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
}

exports.pool = pool;
exports.row = row;
exports.rows = rows;
exports.empty = empty;