const { Router } = require('express')

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
      // TODO: auth
      response.set('Content-Type', 'application/json')
      const result = JSON.stringify(request.macroscopServer.configex)
      response.end(result)
    },
    event(request, response, next) {
      next()
    },
    site(request, response, next) {
      next()
    },
  }
}

/**
 * Фабрика для создания роутера сервера Macroscop
 * @returns Роутер
 */
function macroscopServerRouterFactory() {
  /** Роутер конечной точки /api */
  const macroscopApiRouter = Router()
  macroscopApiRouter
    .route('/faces')
    .get(requestHandlers.faces.find)
    .post(requestHandlers.faces.insert)
  macroscopApiRouter
    .route('/faces/:id')
    .get(requestHandlers.faces.findOne)
    .put(requestHandlers.faces.updateOne)
    .delete(requestHandlers.faces.deleteOne)

  /** Роутер конечной точки / */
  const macroscopRootRouter = Router()
  macroscopRootRouter.get('/configex', requestHandlers.root.configex)
  macroscopRootRouter.get('/event', requestHandlers.root.event)
  macroscopRootRouter.get('/site', requestHandlers.root.site)

  /** Роутер для всех конечных точек */
  const router = Router()
  router.use('/', macroscopRootRouter)
  router.use('/api', macroscopApiRouter)
  return router
}

module.exports = macroscopServerRouterFactory
