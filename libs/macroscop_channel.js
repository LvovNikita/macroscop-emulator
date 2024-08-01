/**
 * Камера (канал) Macroscop
 */
class MacroscopChannel {
  constructor(options) {
    this.channelInfo = this.#prepareChannelInfo(options)
  }

  /**
   * Подготовить информацию о канале для раздела Channels в configex
   * @param {*} options Информация о канале
   * @returns Объект ChannelInfo для configex.Channels
   */
  #prepareChannelInfo(options) {
    const { Id, Name, AttachedToServer } = options

    return {
      Id,
      Name,
      AttachedToServer,
      DeviceInfo: 'RTSP/RTP device RTSP/RTP device',
      IsDisabled: false,
      IsSoundOn: false,
      IsArchivingEnabled: true,
      IsSoundArchivingEnabled: true,
      AllowedRealtime: true,
      AllowedArchive: true,
      IsPtzOn: false,
      IsTransmitSoundOn: false,
      ArchiveMode: 'AlwaysOn',
      Streams: [
        {
          StreamType: 'Main',
          StreamFormat: 'H264',
          RotationMode: 'None',
        },
      ],
      ArchiveStreamType: 'Main',
      ArchiveVideoFormat: "H264",
      ArchiveRotationMode: "None",
      UserScenarios: [],
      IsFaceRecOn: false,
      GeoPosition: null,
      IsPeopleCountingOn: false,
      IsObjectCountingOn: false,
      TimeZoneOffset: 0,
    }
  }
}

module.exports = MacroscopChannel
