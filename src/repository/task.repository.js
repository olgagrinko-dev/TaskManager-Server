const { pool } = require('../db');

async function createTaskDB(task, user_id) {
    const client = await pool.connect();
    const sql = 'INSERT INTO tasks (task, user_id) values ($1, $2) returning *';
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
}

module.exports = { createTaskDB };