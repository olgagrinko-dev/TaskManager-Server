const express = require('express');
const { getAllUser, getUserById, createUser, upDataUserById, deleteUserById } = require('../service/user.service');
const { bildResponse } = require('../helper/bildResponse');
const route = express.Router();

route.get('/', async (request, response) => {
    try {
        const data = await getAllUser();
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await getUserById(id);
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

route.post('/', async (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = await createUser(name, surname, email, pwd);
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

route.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = await upDataUserById(id, name, surname, email, pwd);
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

route.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await deleteUserById(id);
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})


module.exports = route;
