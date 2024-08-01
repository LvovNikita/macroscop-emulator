const os = require('node:os')

const { MacroscopServerGroup, MacroscopServer, MacroscopChannel } = require("./../")

/** Loopback-адрес */
const localhost = '127.0.0.1'

/** Имя сетевого интерфейса */
const networkInterfaceName = 'enp3s0';

/** Локальный IP-адрес */
const localIp = os
  .networkInterfaces()[networkInterfaceName]
  ?.find(item => item.family === 'IPv4')
  ?.address ?? localhost

/** IP-адрес "родительского" сервера */
const primaryServerId = '863ab30b-581d-4e80-9bfd-888732635be0';

/** Имитация группы серверов Macroscop с общей конфигурацией */
const fakeMacroscopServerGroup = new MacroscopServerGroup({
  servers: [
    new MacroscopServer({
      Id: primaryServerId,
      Name: 'Fake Macroscop Server #1',
      PrimaryIp: localhost,
      PrimaryPort: 10001,
    }),
    new MacroscopServer({
      Id: '24fa195c-9cc5-4c19-bf3f-45567373c8df',
      Name: 'Fake Macroscop Server #2',
      PrimaryIp: localhost,
      PrimaryPort: 10002,
    }),
    new MacroscopServer({
      Id: '700d6a1e-2e04-42ae-ad62-9c088bfebc34',
      Name: 'Fake Macroscop Server #3',
      PrimaryIp: localhost,
      PrimaryPort: 10003,
    }),
    new MacroscopServer({
      Id: '6a139c76-9b3c-483d-afe8-ba669ea3ca08',
      Name: 'Fake Macroscop Server #4',
      PrimaryIp: localhost,
      PrimaryPort: 10004,
    }),
    new MacroscopServer({
      Id: 'e075c0f6-e63e-4c8c-b178-0e96d51b1286',
      Name: 'Fake Macroscop Server #5',
      PrimaryIp: localIp,
      PrimaryPort: 10005,
    }),
    new MacroscopServer({
      Id: '0d6787af-80bc-4b3c-af02-13c780bf421e',
      Name: 'Fake Macroscop Server #6',
      PrimaryIp: localIp,
      PrimaryPort: 10006,
    }),
    new MacroscopServer({
      Id: '7f958d23-cecc-47a1-b199-0482b7d1f9c1',
      Name: 'Fake Macroscop Server #7',
      PrimaryIp: localIp,
      PrimaryPort: 10007,
    }),
  ],
  channels: [
    new MacroscopChannel({
      Id: '510df7cd-0287-4b29-b7f3-4fb684fe7dd0',
      Name: 'Fake Macroscop Camera #1',
      AttachedToServer: primaryServerId,
    }),
    new MacroscopChannel({
      Id: '7936cb3b-5833-4024-9190-6670d71f8d63',
      Name: 'Fake Macroscop Camera #2',
      AttachedToServer: primaryServerId,
    }),
    new MacroscopChannel({
      Id: 'ec1077b2-a7f0-464a-bd55-285bfce182ff',
      Name: 'Fake Macroscop Camera #3',
      AttachedToServer: primaryServerId,
    }),
    new MacroscopChannel({
      Id: '411ffd35-8fb6-47d4-bea7-a9390b98d2aa',
      Name: 'Fake Macroscop Camera #4',
      AttachedToServer: primaryServerId,
    }),
  ],
  configex: {
    Id: '93bb9e90-6049-4a0e-8f0f-d5b090c09266'
  }
})

// Запустить группу серверов Macroscop
fakeMacroscopServerGroup.run()

// console.dir(fakeMacroscopServerGroup.servers[1], { depth: 3 })
