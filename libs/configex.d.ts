import { UUID } from 'crypto'

/** Параметры конфигурации системы */
export type ConfigexOptions = {
  /** Уникальный идентификатор действующей конфигурации */
  Id: UUID,
  /** Уникальный идентификатор сервера, отправившего ответ */
  SenderId: UUID,
  /** Номер ревизии действующей конфигурации. Пример: 72 */
  Revision?: number,
  RevNum?: number,
  /** Временная метка последнего применения конфигурации. Пример: 2023-06-07T06:30:15.3279409Z*/
  Timestamp?: string,
  /** Версия протокола XML. Пример: 2 */
  XmlProtocolVersion?: number,
  /** Версия Macroscop, установленная на сервере, отправившем ответ. Пример: 4.1.23 */
  ServerVersion?: string,
  /** Тип лицензии, активированной на сервере, отправившем ответ. Пример: Ultra */
  ProductType?: string,
  /** Секция Servers содержит описание серверов, входящих в действующую конфигурацию. */
  Servers?: any[],
  /** Секция Channels содержит описание настроек каналов действующей конфигурации. */
  Channels?: any[]
}

/** Конфигурация системы */
export declare class Configex {
  constructor(options: ConfigexOptions) {}
}

export = Configex
