const express = require('express');
const { createUser, deleteUserById } = require('../service/user.service');

const route = express.Router();

route.get('/', async (request, response) => {
    response.send('hi');
})

route.post('/', async (request, response) => {
    const { name, surname, email, pwd } = request.body;
    const data = await createUser(name, surname, email, pwd);
    response.send(data);
})

route.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const data = await deleteUserById(id);
    response.send(data);
})


module.exports = route;
