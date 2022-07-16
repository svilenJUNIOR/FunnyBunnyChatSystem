var mongoose = require('mongoose');

var bunnySchema = new mongoose.Schema({
    ChatName: {
        type: String,
    },
    Age: {
        type: Number,
    },
    Picture: {
        type: String,
    },
    Region: {
        type: String,
    },
    Gender: {
        type: Number,
    },
    Bio: {
        type: String,
    },
    UserId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

var Bunny = mongoose.model('Bunny', bunnySchema);

module.exports = Bunny;

