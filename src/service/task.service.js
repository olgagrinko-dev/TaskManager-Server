const { createTaskDB } = require('../repository/task.repository');

async function createTask(task, user_id) {
    const data = await createTaskDB(task, user_id);
    if (data.length == 0) throw new Error('Данные не сохранены');
    return data;
}

module.exports = { createTask };