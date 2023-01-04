const shortid = require('shortid');
const Postcast = require('../../models/Postcast.model.js');

module.exports = {
  get: async (req, res) => {
    const data = await Postcast.find();
    res.json(data);
  },
  post: async (req, res) => {
    const data = req.body;
    data._id = shortid.generate();
    data.src = 'S2aczZ114_mp.mp3';
    data.time_stemp = new Date();
    data.author = shortid.generate();
    data.listened = 0;
    const newPostcast = await Postcast.create(data);
    const err = await newPostcast.save().catch((err) => err);
    console.log(err);
    res.json(data);
  },
};
