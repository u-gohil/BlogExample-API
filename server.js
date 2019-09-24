const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let info = require('./data.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());   


app.get('/api/info', (request, response) => {
if(!info) {
    response.status(404).json({ message: 'No info found!' })
}
response.json(info)
})

module.exports = app;