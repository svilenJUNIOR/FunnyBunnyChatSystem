var mongoose = require('mongoose');
var connectionString="mongodb://localhost:27017/FunnyBunnyChatSystem";

exports.ConnectWithDataBase = () => mongoose.connect(connectionString);