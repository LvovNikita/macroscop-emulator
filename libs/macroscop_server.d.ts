import { ConfigexOptions } from './configex'

/** Параметры сервера Macroscop */
type MacroscopServerOptions = {
  /** Основной HTTP порт сервера */
  PrimaryPort: number,
  /** Название сервера в рамках действующей конфигурации */
  Name: string,
  /** Параметры конфигурации системы */
  configex: ConfigexOptions
}

/** Эмуляция сервера Macroscop */
declare class MacroscopServer {
  constructor(options: MacroscopServerOptions)
}

export = MacroscopServer
