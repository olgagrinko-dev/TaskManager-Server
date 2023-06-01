const { pool } = require('../db');

async function getAllUserDB() {
    const client = await pool.connect();
    const sql = 'select * from users';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getUserByIdDB(id) {
    const client = await pool.connect(id);
    const sql = 'select * from users where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}

async function upDataUserByIdDB(id, name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'UPDATE users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 ) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return result;
}

async function deleteUserByIdDB(id) {
    const client = await pool.connect();
    const sql = 'delete from users where id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

module.exports = { getAllUserDB, getUserByIdDB, createUserDB, upDataUserByIdDB, deleteUserByIdDB };