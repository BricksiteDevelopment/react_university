const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const server = jsonServer.create();
const appRoutes = require('./routes/index');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('./json-server/db.json');

const PORT = 8021;

server.use(bodyParser.json());

// in app routes you can add validation, authentication etc..
appRoutes(server);

server.use(function(err, req, res, next) {
  res.status(500).send(err);
  next(err);
});

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port: ${PORT}`)
});