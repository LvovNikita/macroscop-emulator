const { Router } = require('express')
const requestHandlers = require('./macroscop_request_handlers')

/**
 * Фабрика роутера Macroscop
 * @returns Роутер
 */
function macroscopRouterFactory () {
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

module.exports = macroscopRouterFactory
