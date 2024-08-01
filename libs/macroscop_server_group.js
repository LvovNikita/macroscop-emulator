/**
 * Группа серверов Macroscop
 */
class MacroscopServerGroup {
  constructor(options) {
    this.servers = options.servers
    this.channels = options.channels
    this.configexId = options.configex.Id
  }

  /**
   * Запустить группу серверов
   * @param {} servers Серверы
   * @param {*} channels Каналы
   * @param {*} configex Конфигурация группы серверов
   */
  run() {
    this.servers.forEach(server => {
      server.configex = this.#prepareConfigex(server, this.servers, this.channels, this.configexId)
      server.run()
    })
  }

  /**
   * Подготовить конфигурацию для сервера
   * @param {*} server Целевой сервер
   * @param {*} servers Серверы группы серверов
   * @param {*} channels Каналы
   * @param {*} id Идентификатор конфигурации
   */
  #prepareConfigex(server, servers, channels, id) {
    const configex = {
      Id: id,
      SenderId: server.serverInfo.Id,
      Revision: 72,
      Timestamp: '2023-06-07T06:30:15.3279409Z',
      XmlProtocolVersion: 2,
      ServerVersion: '4.1.23',
      ProductType: 'Ultra',
      Servers: [],
      Channels: []
    }

    servers.forEach(server => configex.Servers.push(server.serverInfo))
    channels.forEach(channel => configex.Channels.push(channel.channelInfo))

    return configex
  }
}

module.exports = MacroscopServerGroup
