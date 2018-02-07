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



let getChirps = () => {
    return new Promise((resolve, reject) => {
        connection.query(`CALL readChirps() `, (err, results, fields) => {
            if (err) {
                connection.end();
                console.log(err);
                reject(err);
            };

            let result = results[0];
            result = result.map((item, index) => {
                return {
                    id: item.id,
                    text: item.text
                };
            });
            resolve(result);
        });
    });
};

let getChirp = (chirpid) => {
    connection.query(`CALL readChirps(${chirpid}) `, (err, results, fields) => {
        if (err) {
            connection.end();
            return console.log(err);
        }
        console.log(results);
    });
}

// let userid = 1; // this param takes in a single integer
// let chirp = 'Deathstroke kicks Batman'; // this param takes in a single text
// let location = 'Gotham City'; // this param takes in a single

let createChirp = (chirp) => {
    return new Promise((resolve, reject) => {
        connection.query(`CALL createChirps('${chirp}')`, (err, results, fields) => {
            if (err) {
                connection.end();
                console.log(err);
                reject(err);
            };
            console.log(chirp);
            resolve(chirp);
        });
    });
}

// let chirpid = 102; // this param takes a single integer
// let chirp = 'Batman attacks Robin'; // this param takes in a single text

let updateChirp = (chirpid, chirp) => {
    connection.query(`CALL updateChirps(${chirpid}, '${chirp}') `, (err, results, fields) => {
        if (err) {
            connection.end();
            return console.log(err);
        }
        console.log(results);
    });
}


// let chirpid = 102; //this param is a single integer

let deleteChirp = (chirpid) => {
    connection.query(`CALL deleteChirps(${chirpid}) `, (err, results, fields) => {
        if (err) {
            connection.end();
            return console.log(err);
        }
        console.log(results);
    });
}

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};