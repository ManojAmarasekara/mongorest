// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./db');
const PORT = 4000;

const User = require('./models/User');
const UserRoute = require('./routes/UserRoute');

app.use(bodyParser.json());
app.use('/user', UserRoute);

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});