const { MacroscopServer, Configex, ChannelInfo } = require('./../')

const server1Id = '863ab30b-581d-4e80-9bfd-888732635be0'
const server2Id = '24fa195c-9cc5-4c19-bf3f-45567373c8df'
const server3Id = '700d6a1e-2e04-42ae-ad62-9c088bfebc34'
const server4Id = '6a139c76-9b3c-483d-afe8-ba669ea3ca08'
const server5Id = 'e075c0f6-e63e-4c8c-b178-0e96d51b1286'
const server6Id = '0d6787af-80bc-4b3c-af02-13c780bf421e'
const server7Id = '7f958d23-cecc-47a1-b199-0482b7d1f9c1'

// CHANNELS

const channel1 = new ChannelInfo({
  Id: '510df7cd-0287-4b29-b7f3-4fb684fe7dd0',
  Name: 'Fake Macroscop Camera #1',
  AttachedToServer: server1Id,
})

const channel2 = new ChannelInfo({
  Id: '7936cb3b-5833-4024-9190-6670d71f8d63',
  Name: 'Fake Macroscop Camera #2',
  AttachedToServer: server1Id,
})

const channel3 = new ChannelInfo({
  Id: 'ec1077b2-a7f0-464a-bd55-285bfce182ff',
  Name: 'Fake Macroscop Camera #3',
  AttachedToServer: server1Id,
})

const channel4 = new ChannelInfo({
  Id: '411ffd35-8fb6-47d4-bea7-a9390b98d2aa',
  Name: 'Fake Macroscop Camera #4',
  AttachedToServer: server1Id,
})

// CONFIGEX

const configex = new Configex({
  Id: '93bb9e90-6049-4a0e-8f0f-d5b090c09266',
  SenderId: null,
  Channels: [
    channel1,
    channel2,
    channel3,
    channel4
  ],
})

configex1 = structuredClone(configex)
configex2 = structuredClone(configex)
configex3 = structuredClone(configex)
configex4 = structuredClone(configex)
configex5 = structuredClone(configex)
configex6 = structuredClone(configex)
configex7 = structuredClone(configex)

configex1.SenderId = server1Id
configex2.SenderId = server2Id
configex3.SenderId = server3Id
configex4.SenderId = server4Id
configex5.SenderId = server5Id
configex6.SenderId = server6Id
configex7.SenderId = server7Id

// SERVERS

const macroscopServer1 = new MacroscopServer({
  PrimaryPort: 10001,
  Name: 'Fake Macroscop Server #1',
  Id: server1Id,
  configex: configex1,
})

const macroscopServer2 = new MacroscopServer({
  PrimaryPort: 10002,
  Name: 'Fake Macroscop Server #2',
  Id: server2Id,
  configex: configex2,
})


const macroscopServer3 = new MacroscopServer({
  PrimaryPort: 10003,
  Name: 'Fake Macroscop Server #3',
  Id: server3Id,
  configex: configex3,
})

const macroscopServer4 = new MacroscopServer({
  PrimaryPort: 10004,
  Name: 'Fake Macroscop Server #4',
  Id: server4Id,
  configex: configex4,
})

const macroscopServer5 = new MacroscopServer({
  PrimaryPort: 10005,
  Name: 'Fake Macroscop Server #5',
  Id: server5Id,
  configex: configex5,
})

const macroscopServer6 = new MacroscopServer({
  PrimaryPort: 10006,
  Name: 'Fake Macroscop Server #6',
  Id: server6Id,
  configex: configex6,
})

const macroscopServer7 = new MacroscopServer({
  PrimaryPort: 10007,
  Name: 'Fake Macroscop Server #7',
  Id: server7Id,
  configex: configex7,
})

const configexServers = [
  macroscopServer1.serverInfo,
  macroscopServer2.serverInfo,
  macroscopServer3.serverInfo,
  macroscopServer4.serverInfo,
  macroscopServer5.serverInfo,
  macroscopServer6.serverInfo,
  macroscopServer7.serverInfo,
]

macroscopServer1.configex.Servers = configexServers
macroscopServer2.configex.Servers = configexServers
macroscopServer3.configex.Servers = configexServers
macroscopServer4.configex.Servers = configexServers
macroscopServer5.configex.Servers = configexServers
macroscopServer6.configex.Servers = configexServers
macroscopServer7.configex.Servers = configexServers

macroscopServer1.run()
macroscopServer2.run()
macroscopServer3.run()
macroscopServer4.run()
macroscopServer5.run()
macroscopServer6.run()
macroscopServer7.run()

// console.dir(macroscopServer1.configex, { depth: 10 })
