var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

var corsOptions = {
  // origin: 'http://localhost:3000',
  origin: '*',
}

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.79wup.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(DB_URL).then(() => console.log('DB Connected...!')).
  catch(error => console.log(error));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions))
app.use('/', indexRouter);

module.exports = app;
