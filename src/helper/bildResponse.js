function bildResponse(response, code, message) {
  response.status(code).send(message);
}

module.exports = { bildResponse };
