const { getAllUserDB, getUserByIdDB, createUserDB, upDataUserByIdDB, deleteUserByIdDB } = require('../repository/user.repository');

async function getAllUser(){
    const data = await getAllUserDB(); 
    if (data.length == 0) throw new Error ('Массив data пустой');
    return data;
}

async function getUserById(id){
    const data = await getUserByIdDB(id); 
    if (data.length == 0) throw new Error ('Такого id нет');
    return data;
}

async function createUser(name, surname, email, pwd) {
    const data = await createUserDB(name, surname, email, pwd);
    if (data.length == 0) throw new Error ('Данные не сохранены');
    return data;
}

async function upDataUserById(id, name, surname, email, pwd) {
    const data = await upDataUserByIdDB(id, name, surname, email, pwd);
    if (data.length == 0) throw new Error ('Такого id нет');
    return data;
}

async function deleteUserById(id) {
    const data = await deleteUserByIdDB(id);
    if (data.length == 0) throw new Error ('Такого id нет');
    return data;
}

module.exports = { getAllUser, getUserById, createUser, upDataUserById, deleteUserById };