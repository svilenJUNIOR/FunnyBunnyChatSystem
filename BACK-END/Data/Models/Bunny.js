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
        type: String,
    },
    Bio: {
        type: String,
    },
    UserId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    Friends: [{
            type: String,
        }],
    Messages: [{
        type: String
    }]
});

var Bunny = mongoose.model('Bunny', bunnySchema);

module.exports = Bunny;

