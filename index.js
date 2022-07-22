const express = require('express');
require('dotenv/config');

const app = express();

const port = process.env.PORT || 3001;

app.get('/', (_req, res) => res.status(200).send('Está vivo!!!'));

app.listen(port);