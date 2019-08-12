const express = require('express');
const router = express.Router();

const tokenVerify = require('./auth/tokenVerify');

// Authentication Routes
router.post('/login', require('./auth/login'));

router.post('/register', require('./auth/register'));

// Tracking Routes
router.get('/track/all', require('./tracking/getTracking'));

router.get('/track/:awb', require('./tracking/getAWBInfo'));

router.get('/track/user', tokenVerify, require('./tracking/getTracking'));

router.post('/add-awb', tokenVerify, require('./tracking/addAwb.js'));

router.post('/edit-awb', tokenVerify, require('./tracking/updateTracking'));

router.post('/delete-awb', tokenVerify, require('./tracking/deleteAwb'));

module.exports = router;