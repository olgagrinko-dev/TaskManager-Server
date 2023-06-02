const express = require('express');
const  bodyParser = require('body-parser');
const user = require('./controller/user.controller');
const task = require('./controller/task.controller');

const app = express();

app.use(bodyParser.json());

app.use('/user', user);
app.use('/task', task);

app.use((error, response, require, _next) => response.send(error.message));

module.exports = app;
