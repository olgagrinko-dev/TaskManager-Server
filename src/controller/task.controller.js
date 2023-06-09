const express = require("express");
const {
  getAllTask,
  getTaskById,
  createTask,
  upDataTaskById,
  deleteTaskById,
  patchTask,
} = require("../service/task.service");
const { bildResponse } = require("../helper/bildResponse");
const { isValidTaskId, isValidTaskBody } = require("../helper/validation");

const route = express.Router();

route.get("/", async (request, response) => {
  try {
    const data = await getAllTask();
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

route.get("/:id", isValidTaskId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await getTaskById(id);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

route.post("/", isValidTaskBody, async (request, response) => {
  try {
    const { task, user_id } = request.body;
    const data = await createTask(task, user_id);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

route.put("/:id", isValidTaskId, isValidTaskBody, async (request, response) => {
  try {
    const { id } = request.params;
    const { task, user_id } = request.body;
    const data = await upDataTaskById(id, task, user_id);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

route.delete("/:id", isValidTaskId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await deleteTaskById(id);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

route.patch("/:id", isValidTaskId, async (request, response) => {
  try {
    const { id } = request.params;
    const clientData = request.body;
    const data = await patchTask(id, clientData);
    bildResponse(response, 200, data);
  } catch (error) {
    bildResponse(response, 404, error.message);
  }
});

module.exports = route;
