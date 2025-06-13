import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models'
import router from './routes/items.routes'

dotenv.config();

/* using ES6 import syntax
const express = require('express')
const router = require('./routes/items.routes.js');
const db = require('./models/index');
var cors = require('cors') */

const app:Express = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json()); // este es el bodyparser
app.use(router);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});