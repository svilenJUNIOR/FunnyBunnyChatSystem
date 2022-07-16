var Bunny = require("../../Data/Models/Bunny");

exports.GetAll = async() => await Bunny.find().lean();
exports.GetById = async(id) => await Bunny.findById(id).lean();

exports.Promote = async(request, response) => {
    var id = request.params.Id;
    var bunny = await this.GetById(id);
    
    console.log(bunny);

    bunny.ChatName = await request.body.ChatName;
    
    console.log(bunny);
};