const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const users = require('./routes/users');

app.use(express.static(__dirname + '/src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/src/index.html', function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})


http.createServer(app).listen(3000);

module.exports = app;
