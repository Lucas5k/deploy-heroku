const express = require('express');
require('dotenv/config');

const app = express();

const port = process.env.PORT || 3001;

const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (_req, res) => res.status(200).send(`${message}`));

app.listen(port);