const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app=express();
app.listen(3000);

//console.log('hi')
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());


let db = mongoose.createConnection('localhost:27017/node-homework');
require('./models/users');
app.db = {
  users:db.model('users')
};

require('./controllers/api')(app);
