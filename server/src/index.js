const express = require('express')
const router = require('./routes/items.routes.js');
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
  /* Added the url for ease of access */
  console.log(`Server listening at http://localhost:${port}`);
})();