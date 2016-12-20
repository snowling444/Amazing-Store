const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: {type:String},
  content: {type:String}
});

module.exports = mongoose.model('post',postSchema)
