const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT, MONGO_URI } = process.env;

// Database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to db...'); })
    .catch(err => { console.error(err); })

// App
const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/participants'));

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})