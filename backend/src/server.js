const express = require('express');
const app = express();
const database = require('./config/database');
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(3333);