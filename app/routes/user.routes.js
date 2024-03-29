const express = require("express");
const app = express.app();
const users = require('../controllers/user.controller');
app.post('/users', users.create);
app.get('/users', users.findAll);
app.get('/users/:userId', users.findOne);
app.put('/users/:userId', users.update);
app.delete('/users/:userId', users.delete);
module.exports = app;
