const express = require('express')
const router = require('./router');
const db = require('./models/index');
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()); // este es el bodyparser
app.use(router);

(async function bootstrap () {
  await db.sequelize.sync(); 
  app.listen(port);
  console.log('Server listening');
})();