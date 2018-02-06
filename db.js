const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'chirper',
        user: 'walt',
        password: 'walt'
    }
);

connection.connect();


// let userid = 1;
// let chirp = 'Deathstroke kicks Batman';
// let location = 'Gotham City';

// connection.query(`CALL createChirps(${userid}, '${chirp}', '${location}')`, (err, results, fields) => {
//     if (err) {
//         connection.end();
//         return console.log(err);
//     }
//     console.log(results);
//     connection.end();
// });


// connection.query(`CALL readChirps()`, (err, results, fields) => {
//     if (err) {
//         connection.end();
//         return console.log(err);
//     }
//     console.log(results);
//     connection.end();
// });


// let chirpid = 102;
// let chirp = 'Batman attacks Robin';

// connection.query(`CALL updateChirps(${chirpid}, '${chirp}')`, (err, results, fields) => {
//     if (err) {
//         connection.end();
//         return console.log(err);
//     }
//     console.log(results);
//     connection.end();
// });


// let chirpid = 102;

// connection.query(`CALL deleteChirps(${chirpid})`, (err, results, fields) => {
//     if (err) {
//         connection.end();
//         return console.log(err);
//     }
//     console.log(results);
//     connection.end();
// });