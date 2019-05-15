const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const usersRouter = require('./routes/usersRouter');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.set('useNewUrlParser', true);

app.listen(PORT, async () => {
  try {
    console.log('Server is listening');
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to Atlas');
  } catch (error) {
    console.log(error);
  }
})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', usersRouter);









app.use(errorHandler);
