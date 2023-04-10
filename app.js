const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

app.listen(port, () => console.log('Abriendo el servidor en localhost 1000'));


const public = path.resolve(__dirname, 'public');


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/index.html')))