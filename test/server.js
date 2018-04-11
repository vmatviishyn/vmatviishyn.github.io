// process.stdout.write('What are you waiting for? \n');

const express = require('express');
const app = express();
const handler = require('./controllers/handlers');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//  Connect all our routes to our application
app.post('/rockstar', handler.POST);
app.get('/rockstars', handler.GET);
app.get('/rockstar/:id', handler.GETBYID);
app.put('/rockstar/:id', handler.PUT);
app.delete('/rockstar/:id', handler.DELETE);

// Turn on that server!
app.listen(3000, () => {
    console.log('App listening on port 3000');
});