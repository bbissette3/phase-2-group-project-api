// See https://github.com/typicode/json-server#module
// const path = require("path")
// const fs = require("fs");
// const os = require("os");



const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

setInterval(() => {
    https.get("https://swolldiers-api.onrender.com/");
  }, 300000); // every 5 minutes

// fs.copyFile("db.json", os.tmpdir() + "/db.json", function (err) {
//   if (err) console.log(err);
//   else console.log("copy file succeed to" + os.tmpdir());
// });

server.use(middlewares)
// Add this before server.use(router)
// server.use(jsonServer.rewriter({
//     '/api/*': '/$1',
//     '/blog/:resource/:id/show': '/:resource/:id'
// }))
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
