'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

// GET
router.get('/', controller.get);

// POST
const create = router.post('/',controller.post);

module.exports = router;