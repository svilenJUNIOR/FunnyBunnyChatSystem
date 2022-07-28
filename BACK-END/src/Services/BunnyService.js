var Bunny = require("../../Data/Models/Bunny");
var User = require("../../Data/Models/User")

exports.GetAll = async () => await Bunny.find().lean();
exports.GetById = async (id) => await Bunny.findById(id);

exports.Create = async (request, response) => {
    
    var bunny = await Bunny.create({
        Age: Number(request.body.Age),
        Bio: request.body.Bio,
        ChatName: request.body.ChatName,
        Gender: request.body.Gender,
        Picture: request.body.Picture,
        Region: request.body.Region,
        UserId: request.body.UserId,
    });

    var update = { HasBunny: true };
    await User.findByIdAndUpdate(request.body.UserId, update);

    response.send(bunny);
};