/**
 * Получить промежуточное ПО, добавляющее объект сервера в объект запрос
 * @param {*} macroscopServer Экземпляр сервера
 * @returns Промежуточное ПО
 */
function createMacroscopServerMiddleware(macroscopServer) {
  return (request, response, next) => {
    request.macroscopServer = macroscopServer
    next()
  }
}

module.exports = {
  createMacroscopServerMiddleware
}
