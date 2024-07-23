/**
 * Обработчики запросов к API Macroscop
 */
const requestHandlers = {
  /** /api/faces */
  faces: {
    find(request, response, next) {
      next()
    },
    insert(request, response, next) {
      next()
    },
    findOne(request, response, next) {
      next()
    },
    updateOne(request, response, next) {
      next()
    },
    deleteOne(request, response, next) {
      next()
    },
  },
  /** / */
  root: {
    configex(request, response, next) {
      next()
    },
    event(request, response, next) {
      next()
    },
    site(request, response, next) {
      next()
    },
  }
}

module.exports = requestHandlers
