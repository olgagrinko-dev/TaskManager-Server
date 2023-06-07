const { getUserByEmail, createUserDB } = require('../repository/api.repository');
const bcrypt = require('bcrypt');

const salt = 2;

async function createUser(name, surname, email, pwd) {
    const hashedPassword = await bcrypt.hash(pwd, salt);
    const data = await createUserDB(name, surname, email, hashedPassword);
    if (data.length == 0) throw new Error('user not created');
    return data;
}

async function authUser(email, pwd) {
    const user = await getUserByEmail(email);
    if (!user.length) throw new Error('email not found');

    console.log(user);
    console.log(email, pwd);
    const bool = await bcrypt.compare(pwd, user[0].pwd);
    console.log(bool);
    if (!bool) throw new Error('пароли не совпадают');
    return user;
}

module.exports = { createUser, authUser };