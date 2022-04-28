const http = require('http')
const app = require('./App')
const port = 'https://node-mongo-shameem.herokuapp.com/' || 3000;

const server = http.createServer(app)
server.listen(port)