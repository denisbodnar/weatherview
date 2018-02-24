const express = require('express');
const path = require('path');

const app = express();
const indexPath = path.resolve(__dirname, 'dist/index.html');
const buildPath = path.resolve(__dirname, 'dist');

app.use(express.static(buildPath));

app.get('*', (req, res) => res.sendFile(indexPath));

app.listen(8000, () => console.log('Port 8000 listening'));
