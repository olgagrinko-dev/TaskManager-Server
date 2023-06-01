const express = require('express');
const { getAllUser, getUserById, createUser, upDataUserById, deleteUserById } = require('../service/user.service');

const route = express.Router();

route.get('/', async (request, response) => {
    const data = await getAllUser();
    response.send(data);
})

route.get('/:id', async (request, response) => {
    const { id } = request.params;
    const data = await getUserById(id);
    response.send(data);
})

route.post('/', async (request, response) => {
    const { name, surname, email, pwd } = request.body;
    const data = await createUser(name, surname, email, pwd);
    response.send(data);
})

route.put('/:id', async (request, response) => {
    const { id } = request.params;
    const { name, surname, email, pwd } = request.body;
    const data = await upDataUserById(id, name, surname, email, pwd);
    response.send(data); 
})

route.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const data = await deleteUserById(id);
    response.send(data);
})


module.exports = route;
