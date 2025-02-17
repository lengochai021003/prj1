const express = require('express');
const database = require('../project1/config/database');
const { render } = require('pug');

require("dotenv").config();


database.connect();
const route= require('./routes/client/index.routes');
const app = express();
const port = process.env.PORT;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));



route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})