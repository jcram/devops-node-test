require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
require('./app/routes')(app, {});

app.listen(process.env.APP_PORT, () => {
    console.log('Rodando na porta: ' + process.env.APP_PORT);
});