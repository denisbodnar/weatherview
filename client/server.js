const express = require('express');
const path = require('path');

const app = express();
const SRC_DIR = path.resolve('dist');
// const buildPath = path.resolve(__dirname, 'dist');

app.use(express.static(SRC_DIR));

app.get('*', (req, res) => res.sendFile(path.join(SRC_DIR, 'index.html')));

app.listen(8000, () => console.log('Port 8000 listening'));
