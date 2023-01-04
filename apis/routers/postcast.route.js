const express = require('express');

const controller = require('../controllers/postcast.controller');

const Route = express.Router();

Route.get('/postcast', controller.get);
Route.post('/postcast', controller.post);
module.exports = Route;
