var Bunny = require("../../Data/Models/Bunny");

exports.GetAll = async() => await Bunny.find().lean();