const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./system/config.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.set('secretKey', config.secret);

app.use('/', require('./routes/index'));

module.exports = app;