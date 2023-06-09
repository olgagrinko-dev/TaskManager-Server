const express = require("express");
const { bildResponse } = require("../helper/bildResponse");
const { createUser, authUser } = require("../service/api.service");

const route = express.Router();

route.post("/reg", async (request, response) => {
  try {
    const { name, surname, email, pwd } = request.body;
    const data = await createUser(name, surname, email, pwd);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

route.post("/auth", async (request, response) => {
  try {
    const { email, pwd } = request.body;
    const data = await authUser(email, pwd);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

module.exports = route;
