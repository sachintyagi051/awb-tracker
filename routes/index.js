const express = require('express');
const router = express.Router();

const tokenVerify = require('./auth/tokenVerify');

// Tracking Routes
router.post('/add-awb', tokenVerify, require('./track/addAWB.js'));

router.post('/add-courier', tokenVerify, require('./track/addCourier'));

router.get('/track/:id', tokenVerify, require('./track/fetchData'));

router.post('/update-status', tokenVerify, require('./track/updateCourierStatus'));

// Authentication Routes
router.post('/login', require('./auth/login'));

router.post('/registration', require('./auth/registration'));

module.exports = router;