const { randomUUID } = require('crypto');

/** Конфигурация системы */
class Configex {
  constructor(options) {
    Object.assign(
      this,
      {
        /** Уникальный идентификатор действующей конфигурации */
        Id: randomUUID(),
        ...options
      }
    )
  }
}

module.exports = Configex
