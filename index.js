const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const config = require('./configure/config.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));

mongoose.connect(config.mongo_url, { useNewUrlParser: true }, () => {
    console.log('Database Connected.')
});

app.listen(port, () => {
    console.log('Server running.')
});

module.exports = app;