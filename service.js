const Service = require('node-windows').Service

const svc =  new Service({
    name: "nodeTestServer1",
    description: "Test Server",
    script: "E:\\Programming Code\\nodejs_sequelize_auto_create_database_tables\\index.js"
})

svc.on('install', function(){
    svc.start()
})

svc.install()