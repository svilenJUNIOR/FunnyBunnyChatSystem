var Bunny = require("../../Data/Models/Bunny");

exports.GetAll = async() => await Bunny.find().lean();
exports.GetById = async(id) => await Bunny.findById(id).lean();

exports.Promote = async(request, response) => {
    var bunny = await this.GetById("62d294e4b447a1fd43a147e9");
    bunny.ChatName = await request.body.ChatName;
    console.log(bunny);
};