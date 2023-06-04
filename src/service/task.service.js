const { getAllTaskDB, getTaskByIdDB, createTaskDB, upDataTaskByIdDB, deleteTaskByIdDB } = require('../repository/task.repository');

async function getAllTask() {
    const data = await getAllTaskDB();
    if (data.length == 0) throw new Error('Массив data пустой');
    return data;
}

async function getTaskById(id) {
    const data = await getTaskByIdDB(id);
    if (data.length == 0) throw new Error('Такого id нет');
    return data;
}

async function createTask(task, user_id) {
    const data = await createTaskDB(task, user_id);
    if (data.length == 0) throw new Error('Данные не сохранены');
    return data;
}

async function upDataTaskById(id, task, user_id) {
    const data = await upDataTaskByIdDB(id, task, user_id);
    if (data.length == 0) throw new Error('Такого id нет');
    return data;
}

async function deleteTaskById(id) {
    const data = await deleteTaskByIdDB(id);
    if (data.length == 0) throw new Error('Такого id нет');
    return data;
}

module.exports = { getAllTask, getTaskById, createTask, upDataTaskById, deleteTaskById };