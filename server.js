const http = require('http')
const app = require('./App')
const port = 'https://git.heroku.com/node-mongo-shameem.git' || 3000;

const server = http.createServer(app)
server.listen(port)