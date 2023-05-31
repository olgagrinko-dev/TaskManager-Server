const express = require('express');

const route = express.Router();

route.get ('/', async(request, response) => {
    response.send('hi');  
})

module.exports = route;
