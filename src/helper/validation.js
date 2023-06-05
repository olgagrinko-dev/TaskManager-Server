function isValidTaskId(request, response, next) {
    const { id } = request.params;
    if (isNaN(id)) throw new Error('id не число');
    if (id <= 0) throw new Error('id отрицательное число');
    next();
}

function isValidTaskBody(request, response, next) {
    const { task, user_id } = request.body;
    if(!task) throw new Error ('значение отсутствует');
    if(!isNaN(task)) throw new Error ('невалидное значение');
    if(!isNaN(user_id )) throw new Error ('невалидное значение');
    if(user_id <= 0) throw new Error ('user_id отрицательное');
    next();
}

module.exports = { isValidTaskId, isValidTaskBody };