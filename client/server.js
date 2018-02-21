const express = require('express');
const path = require('path');

const app = express();
const indexPath = path.resolve('client/dist/index.html');
const buildPath = path.resolve('client/dist');

app.use(express.static(buildPath));

app.get('*', (req, res) => res.sendFile(indexPath));

app.listen(8000, () => console.log('Port 8000 listening'));
