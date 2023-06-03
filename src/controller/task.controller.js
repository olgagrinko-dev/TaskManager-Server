const express = require('express');
const { getAllTask, getTaskById, createTask } = require('../service/task.service')
const { bildResponse } = require('../helper/bildResponse');

const route = express.Router();

route.get('/', async (request, response) => {
    try {
        const data = await getAllTask();
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await getTaskById(id);
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

route.post('/', async (request, response) => {
    try {
        const { task, user_id } = request.body;
        const data = await createTask(task, user_id);
        bildResponse(response, 200, data);
    } catch (error) {
        bildResponse(response, 404, error.message);
    }
})

module.exports = route;