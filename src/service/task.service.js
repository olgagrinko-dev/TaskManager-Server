const { getAllTaskDB, getTaskByIdDB, createTaskDB } = require('../repository/task.repository');

async function getAllTask() {
    const data = await getAllTaskDB();
    if (data.length == 0) throw new Error('Массив data пустой');
    return data;
}

async function getTaskById(id) {
    const data = await getTaskByIdDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

async function createTask(task, user_id) {
    const data = await createTaskDB(task, user_id);
    if (data.length == 0) throw new Error('Данные не сохранены');
    return data;
}

module.exports = { getAllTask, getTaskById, createTask };