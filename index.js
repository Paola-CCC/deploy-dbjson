const jsonServer = require("json-server") // importing json-server library
const auth = require('json-server-auth')

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001
// /!\ Bind the router db to the app
server.db = router.db
// You must apply the auth middleware before the router
server.use(auth)
server.use(middlewares);
server.use(router);

server.listen(port);