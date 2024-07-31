export type ChannelInfoOptions = {
  Id: UUID,
  Name: string,
  DeviceInfo: string,
  AttachedToServer: UUID,
  IsDisabled: boolean,
  IsSoundOn: boolean
  IsArchivingEnabled: boolean,
  AllowedRealtime: boolean,
  AllowedArchive: boolean,
  IsPtzOn: boolean,
  IsTransmitSoundOn: boolean,
  ArchiveMode: string, // TODO: enum
  Streams: {
    /** Тип потока. Возможные значения: Main — Основной, Alternative — Дополнительный 1, SecondAlternative — Дополнительный 2, ThirdAlternative — Дополнительный 3 */
    StreamType: 'Main' | 'Alternative' | 'SecondAlternative' | 'ThirdAlternative',
    /** Формат потока видео */
    StreamFormat: string, // TODO: enum
    /** Настройки поворота изображения для потока видео */
    RotationMode: string, // TODO: enum
  }[],
  ArchiveStreamType: string, // TODO: enum
  ArchiveVideoFormat: string, // TODO: enum
  ArchiveRotationMode: string, // TODO: enum
  UserScenarios: any[], // TODO:
  IsFaceRecOn: boolean,
  GeoPosition: any, // TODO:
  IsPeopleCountingOn: boolean,
  IsObjectCountingOn: boolean,
  TimeZoneOffset: number
}

export declare class ChannelInfo {
  constructor(options: ChannelInfoOptions)
}
