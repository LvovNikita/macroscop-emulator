const express = require('express')

const macroscopRouterFactory = require('./macroscop_router')
const { createMacroscopServerMiddleware } = require('./middlewares')

/**
 * Эмуляция сервера Macroscop
 */
class MacroscopServer {
  /**
   * Конструктор
   * @param {*} options Параметры сервера
   */
  constructor(options) {
    this.options ??= {}
    Object.assign(
      this.options,
      {
        Revision: 72,
        Timestamp: '2023-06-07T06:30:15.3279409Z',
        XmlProtocolVersion: 2,
        ServerVersion: '4.1.23',
        ProductType: 'Ultra',
        Servers: [],
        Channels: [],
        ...options
      })
  }

  /**
   * Запустить сервер
   */
  run() {
    const httpServer = express()
    if (!this.options?.PrimaryPort) throw new Error('options must contain PrimaryPort')
    if (!this.options?.Id) throw new Error('options must contain Id')
    if (!this.options?.SenderId) throw new Error('options must contain SenderId')
    if (!this.options?.Name) throw new Error('options must contain Name')

    const router = macroscopRouterFactory()
    const addMacroscopServerInfoMiddleware = createMacroscopServerMiddleware(this)
    httpServer.use(addMacroscopServerInfoMiddleware)
    httpServer.use(router)
    httpServer.listen(this.options.PrimaryPort, () => {
      console.log(`Server "${this.options.Name}" is running on port ${this.options.PrimaryPort}`)
    })
  }
}

module.exports = MacroscopServer
