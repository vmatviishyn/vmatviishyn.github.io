const Routes = require("../routes");
const fs = require('fs');

exports.POST = (req, res) => {
    const art = {
        id: req.body.id,
        name: req.body.name,
        band: req.body.band,
        instrument: req.body.instrument
    }
    Routes.POST(art, (err, file) => {
        let objArtists = JSON.parse(file);
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) return res.status(400).send("The artist info is empty.");
        for (let i=0; i < objArtists.artists.length; i++){
            if (objArtists.artists[i].name === req.body.name || objArtists.artists[i].id === req.body.id || objArtists.artists[i].band === req.body.band){
                break;
                return res.status(409).send("Musician already exist.")   
            }
        }
        objArtists.artists.push(art);
        fs.writeFile('./data/storage.json', JSON.stringify(objArtists), 'utf-8', err => {
            if (err) {
                console.log("Write error" + err);
            }
            console.log("The artist was added.");
        });
        res.status(201).send(objArtists.artists);
    })
}

exports.GET = (req, res) => {
    Routes.GET((err, file) => {
        let objArtists = JSON.parse(file);
        if (err) return res.status(404).send(err);
        res.status(200).send(objArtists.artists);
    })
}

exports.GETBYID = (req, res) => {
    let id = req.params.id;
    Routes.GETBYID(id, (err, file) => {
        let objArtists = JSON.parse(file);
        let artist = objArtists.artists.find(a => a.id === parseInt(id));
        if (!artist) return res.status(404).send("The artist with the given ID was not found.");
        res.status(200).send(artist);
    })
}

exports.PUT = (req, res) => {
    let id = req.params.id;
    var newArtist = {
        id: parseInt(req.params.id),
        name: req.body.name,
        band: req.body.band,
        instrument: req.body.instrument
    }

    Routes.PUT(id, newArtist, (err, file) => {
        let objArtists = JSON.parse(file);
        let artist = objArtists.artists.find(a => a.id === parseInt(req.params.id));
        if (!artist) return res.status(404).send("The artist with the given ID was not found.");
        index = req.params.id - 1;
        objArtists.artists[index] = newArtist;

        fs.writeFile('./data/storage.json', JSON.stringify(objArtists), 'utf-8', err => {
            if (err) {
                console.log("Write error" + err);
            }
            console.log("The artist was updated.");
        });

        res.status(200).send(objArtists.artists);
    })
}

exports.DELETE = (req, res) => {
    var id = req.params.id;
    Routes.DELETE(id, (err, file) => {
        let objArtists = JSON.parse(file);
        let artist = objArtists.artists.find(a => a.id === parseInt(req.params.id));
        if (!artist) return res.status(404).send("The artist with the given ID was not found.");
        index = id - 1;
        objArtists.artists.splice(index, 1);
        fs.writeFile('./data/storage.json', JSON.stringify(objArtists), 'utf-8', err => {
            if (err) {
                console.log("Write error" + err);
            }
            console.log("The artist was deleted.");
        });
        let mess = { "message": "Musician has been successfully removed" };
        res.status(200).send({ message: "Musician has been successfully removed." });
    })
}