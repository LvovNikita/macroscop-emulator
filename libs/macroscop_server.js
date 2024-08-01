const express = require('express')

const macroscopServerRouterFactory = require('./macroscop_server_router')

/**
 * Эмуляция сервера Macroscop
 */
class MacroscopServer {
  constructor(options) {
    this.configex = null
    this.serverInfo = this.#prepareServerInfo(options)
  }

  /**
   * Запустить сервер
   * @param {*} Name Имя сервера
   * @param {*} PrimaryIp IP-адрес сервера
   * @param {*} PrimaryPort Порт сервера
   */
  run() {
    const httpServer = express()
    // Добавить информацию о сервере в объект request
    httpServer.use((request, response, next) => {
      request.macroscopServer = this
      next()
    })
    // Инициализация роутера
    httpServer.use(macroscopServerRouterFactory())
    // Запуск сервера Express
    httpServer.listen(this.serverInfo.PrimaryPort, this.serverInfo.PrimaryIp, () => {
      console.log(`Server "${this.serverInfo.Name}" is running on ${this.serverInfo.PrimaryIp}:${this.serverInfo.PrimaryPort}`)
    })
  }

  /**
   * Подготовить информацию о сервере для раздела Servers в configex
   * @param {*} options Информация о сервере
   * @returns Объект ServerInfo для configex.Servers
   */
  #prepareServerInfo(options) {
    const { Id, Name, PrimaryIp, PrimaryPort } = options

    return {
      Id,
      Name,
      PrimaryIp,
      PrimaryPort,
      Url: `${PrimaryIp}:${PrimaryPort}`,
      PrimarySslPort: '0',
      SecondaryIp: '',
      SecondaryPort: '0',
      SecondarySslPort: '0',
      ConnectionUrl: null,
    }
  }
}

module.exports = MacroscopServer
