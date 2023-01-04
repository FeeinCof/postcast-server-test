require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
mongoose.set('strictQuery', false);

const express = require('express');
const morgan = require('morgan');
const app = express();

const postcastRouter = require('./apis/routers/postcast.route');

const PORT = process.env.PORT || 3001;

app.use(morgan('combined'));
app.use('/static', express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api', postcastRouter);

app.listen(PORT, () => {
  console.log('App is listening on PORT: ', PORT);
});
