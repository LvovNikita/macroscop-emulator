const express = require('express')

const macroscopRouterFactory = require('./macroscop_router')

/**
 * Эмуляция сервера Macroscop
 */
class MacroscopServer {
  /**
   * Конструктор
   * @param {*} options Параметры сервера
   */
  constructor(options = {}) {
    this.options = options
  }

  /**
   * Запустить сервер
   */
  run() {
    const httpServer = express()
    if (!this.options?.port) {
      throw new Error('options must contain port')
    }
    const router = macroscopRouterFactory()
    httpServer.use(router)
    httpServer.listen(this.options.port, () => {
      console.log(`Server is running on port ${this.options.port}`)
    })
  }
}

module.exports = MacroscopServer
