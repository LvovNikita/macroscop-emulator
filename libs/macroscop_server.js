const express = require('express')

const macroscopRouterFactory = require('./macroscop_router')
const { createMacroscopServerMiddleware } = require('./middlewares')
const ServerInfo = require('./server_info')

/**
 * Эмуляция сервера Macroscop
 */
class MacroscopServer {
  /**
   * Конструктор
   * @param {*} options Параметры сервера
   */
  constructor(options) {
    this.options = options ?? {}
    this.configex = {}
    this.serverInfo = {}

    this.setServerInfo(options)
    this.setConfigex(options)
  }

  /**
   * Запустить сервер
   */
  run() {
    const httpServer = express()
    if (!this.options.PrimaryPort) throw new Error('options must contain PrimaryPort')
    if (!this.options.Name) throw new Error('options must contain Name')
    if (!this.configex.Id) throw new Error('options must contain Id')
    if (!this.configex.SenderId) throw new Error('options must contain SenderId')

    const router = macroscopRouterFactory()
    const addMacroscopServerInfoMiddleware = createMacroscopServerMiddleware(this)
    httpServer.use(addMacroscopServerInfoMiddleware)
    httpServer.use(router)
    const onListen = () => {
      console.log(`Server "${this.options.Name}" is running on port ${this.options.PrimaryPort}`)
    }
    httpServer.listen(this.options.PrimaryPort, onListen)
  }

  setConfigex(options) {
    Object.assign(
      this.configex,
      {
        Revision: 72,
        Timestamp: '2023-06-07T06:30:15.3279409Z',
        XmlProtocolVersion: 2,
        ServerVersion: '4.1.23',
        ProductType: 'Ultra',
        Servers: [this.serverInfo],
        Channels: [],
        ...(options?.configex ?? {})
      }
    )
  }

  setServerInfo(options) {
    this.serverInfo = new ServerInfo({
      Name: options.Name,
      PrimaryPort: options.PrimaryPort,
      Id: options.configex.SenderId
    })
  }
}

module.exports = MacroscopServer
