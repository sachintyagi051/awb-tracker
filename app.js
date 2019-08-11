const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./system/config.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.set('secretKey', config.secret);

/* Global Cross-Origin Access */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.use('/', require('./routes/index'));

module.exports = app;