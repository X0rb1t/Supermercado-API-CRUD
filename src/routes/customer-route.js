'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

// POST
const create = router.post('/',controller.post);


module.exports = router;