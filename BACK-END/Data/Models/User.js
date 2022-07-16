var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    HairColor: {
        type: String,
        required: true,
    },
    Breed: {
        type: String,
        required: true,
    },
    SignatureJoke: {
        type: String,
        required: true,
    },
    Friends: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Bunny'
        }
    ],
});

var User = mongoose.model("User", userSchema);

module.exports = User;