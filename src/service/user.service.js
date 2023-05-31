const { createUserDB, deleteUserByIdDB } = require('../repository/user.repository');

async function createUser(name, surname, email, pwd) {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

async function deleteUserById(id) {
    const data = await deleteUserByIdDB(id);
    return data;
}


module.exports = { createUser, deleteUserById };