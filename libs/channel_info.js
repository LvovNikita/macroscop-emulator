/** Информация о канале (камере) */
class ChannelInfo {
  constructor(options) {
    if (!options.Id) throw new Error('options must contain Id')
    if (!options.Name) throw new Error('options must contain Name')
    if (!options.AttachedToServer) throw new Error('options must contain AttachedToServer')
    Object.assign(this, {
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
      ...options
    })
  }
}

module.exports = ChannelInfo
