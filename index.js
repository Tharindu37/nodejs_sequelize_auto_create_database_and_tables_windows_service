const http = require('http')
const app = require('./app')
const db = require('./models')
const port = 3002

const server = http.createServer(app)
db.sequelize.sync({ alter:true }).then(()=>{
    server.listen(port, () => {
        console.log('Server is running on port 3002');
      });
}).catch(error => {
    console.error("Error syncing database: ", error)
})

// server.listen(port, () => {
//     console.log('Server is running on port 3002');
//   });