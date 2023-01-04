const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagsSchema = new Schema({
  name: String,
  slug: String,
});

const PostcastSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  des: String,
  time_stemp: Date,
  src: String,
  author: mongoose.Types.ObjectId,
  listened: Number,
  tags: [tagsSchema],
});

const Postcast = mongoose.model('my_postcast', PostcastSchema, 'postcasts');

module.exports = Postcast;
