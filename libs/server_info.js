/** Описание сервера, входязего в конфигурацию */
class ServerInfo {
  constructor(options) {
    if (!options.PrimaryPort) throw new Error('options must contain PrimaryPort')
    if (!options.Name) throw new Error('options must contain Name')
    if (!options.Id) throw new Error('options must contain Id')
    options.PrimaryIp ??= '127.0.0.1'
    this.Id = options.Id
    this.Name = options.Name
    this.PrimaryPort = options.PrimaryPort
    this.PrimaryIp = options.PrimaryIp ?? defaultPrimaryIp
    this.Url = `${options.PrimaryIp}:${options.PrimaryPort}`
  }
}

module.exports = ServerInfo
