var Bunny = require("../../Data/Models/Bunny");
var User = require("../../Data/Models/User")

var jwt = require("jsonwebtoken");
var { promisify } = require("util");
const { STATUS_CODES } = require("http");
var jwtVerify = promisify(jwt.verify);

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

exports.ProfileData = async (request, response) => {
    var token = request.cookies["IsAuth"];
    let decodedToken = await jwtVerify(token, "JWTSecret");

    var user = await User.findById({ "_id": decodedToken.Id }).lean();
    var bunny = await Bunny.find({ "UserId": user._id });

    var data = { ...user, ...bunny };
    response.send(data);
};

exports.Edit = async (request, response) => {
    var token = request.cookies["IsAuth"];
    let decodedToken = await jwtVerify(token, "JWTSecret");

    var newUserData = {
        Email: request.body.Email,
        Password: request.body.Password,
        Name: request.body.Name,
        HairColor: request.body.HairColor,
        Breed: request.body.Breed,
        SignatureJoke: request.body.SignatureJoke,
    }

    var newBunnyData = {
        ChatName: request.body.ChatName,
        Age: Number(request.body.Age),
        Picture: request.body.Picture,
        Region: request.body.Region,
        Gender: request.body.Gender,
        Bio: request.body.Bio,
    }

        
    var user = await User.findByIdAndUpdate(decodedToken.Id, newUserData)
    var bunny = await Bunny.findByIdAndUpdate(decodedToken.bunnyId, newBunnyData)

    response.sendStatus(200);
};