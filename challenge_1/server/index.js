const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const port = 3000;


app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')))

app.listen(port, () => console.log(`Listening on port ${port}`));