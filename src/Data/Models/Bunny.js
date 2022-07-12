const mongoose = require('mongoose');

const bunnySchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },
    Password: {
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
    Name: {
        type: String,
        required: true,
    },
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
    LookingFor: {
        type: String,
    },
});

const Bunny = mongoose.model('Bunny', bunnySchema);

module.exports = Bunny;

