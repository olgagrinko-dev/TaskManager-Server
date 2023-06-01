const { getAllUserDB, getUserByIdDB, createUserDB, upDataUserByIdDB, deleteUserByIdDB } = require('../repository/user.repository');

async function getAllUser(){
    const data = await getAllUserDB(); 
    return data;
}

async function getUserById(id){
    const data = await getUserByIdDB(id);    
    return data;
}

async function createUser(name, surname, email, pwd) {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

async function upDataUserById(id, name, surname, email, pwd) {
    const data = await upDataUserByIdDB(id, name, surname, email, pwd);
    return data;
}

async function deleteUserById(id) {
    const data = await deleteUserByIdDB(id);
    return data;
}

module.exports = { getAllUser, getUserById, createUser, upDataUserById, deleteUserById };