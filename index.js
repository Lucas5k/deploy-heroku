const express = require('express');
require('dotenv/config');

const app = express();

const port = process.env.PORT || 3001;

const message = 'Olá Marilene';

app.get('/', (_req, res) => res.status(200).send(`${message}, a noite tainha`));

app.listen(port);