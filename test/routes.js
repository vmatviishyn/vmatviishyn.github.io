const fs = require('fs');


exports.POST = (artist, cb) => {
    fs.readFile('./data/storage.json', 'utf8', (err, file) => {
        cb(err, file);
    });
}

exports.GET = cb => {
    fs.readFile('./data/storage.json', 'utf8', (err, file) => {
        cb(err, file);
    });
}

exports.GETBYID = (id, cb) => {
    fs.readFile('./data/storage.json', 'utf8', (err, file) => {
        cb(err, file);
    });
}

exports.PUT = (id, newData, cb) => {
    fs.readFile('./data/storage.json', 'utf8', (err, file) => {
        cb(err, file);
    });
}

exports.DELETE = (id, cb) => {
    fs.readFile('./data/storage.json', 'utf8', (err, file) => {
        cb(err, file);
    });
}