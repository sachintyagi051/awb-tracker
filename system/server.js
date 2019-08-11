const http = require('http');
const mongoose = require('mongoose');

const app = require('../app');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

const config = require('./config.json');

mongoose.connect(config.hosted, { useNewUrlParser: true }, () => {
    console.log('Database Connected.')
});

server.listen(port, () => {
    console.log('Server running on port ' + port + '.')
});

module.exports = server;