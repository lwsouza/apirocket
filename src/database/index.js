const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds127034.mlab.com:27034/apirec', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;