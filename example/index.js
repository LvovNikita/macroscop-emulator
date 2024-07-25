const { MacroscopServer, Configex } = require('./../')

const macroscopServer = new MacroscopServer({
  PrimaryPort: 10001,
  Name: 'Fake Macroscop Server #1',
  configex: new Configex({
    Id: '93bb9e90-6049-4a0e-8f0f-d5b090c09266',
    SenderId: '863ab30b-581d-4e80-9bfd-888732635be0',
  })
})

macroscopServer.run()

console.log(macroscopServer.serverInfo)
console.log(macroscopServer.configex)
