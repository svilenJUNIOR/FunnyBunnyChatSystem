var Bunny = require("../../Data/Models/Bunny");

exports.GetAll = async() => await Bunny.find().lean();
exports.GetById = async(id) => await Bunny.findById(id).lean();