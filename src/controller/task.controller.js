const express = require('express');
const { createTask } = require('../service/task.service')
const { bildResponse } = require('../helper/bildResponse');

const route = express.Router();

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