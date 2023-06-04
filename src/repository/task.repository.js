const { pool } = require('../db');

async function getAllTaskDB() {
    const client = await pool.connect();
    const sql = 'select * from tasks';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getTaskByIdDB(id) {
    const client = await pool.connect();
    const sql = 'select * from tasks where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createTaskDB(task, user_id) {
    const client = await pool.connect();
    const sql = 'INSERT INTO tasks (task, user_id) values ($1, $2) returning *';
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
}

async function upDataTaskByIdDB(id, task, user_id) {
    const client = await pool.connect();
    const sql = 'UPDATE tasks set task = $1, user_id = $2 where id = $3 returning *';
    const result = (await client.query(sql, [task, user_id, id])).rows;
    return result;
}

async function deleteTaskByIdDB(id) {
    const client = await pool.connect();
    const sql = 'delete from tasks where id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

module.exports = { getAllTaskDB, getTaskByIdDB, createTaskDB, upDataTaskByIdDB, deleteTaskByIdDB };