var Bunny = require("../../Data/Models/Bunny");
var User = require("../../Data/Models/User")
var hasher = require("bcrypt");

var jwt = require("jsonwebtoken");
var { promisify } = require("util");
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
        Password: await hasher.hash(request.body.Password, 10),
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

exports.ReturnBunny = async (request, response) => {
    var token = request.cookies["IsAuth"];
    var decodedToken = await jwtVerify(token, "JWTSecret");

    var bunny = await this.GetById(decodedToken.bunnyId);
    
    response.send(bunny);
};

exports.SaveMessage = async (request, response) => {
    var msg = `From ${request.body.ChatName} - ${request.body.message}`;
    // var receiver = await Bunny.findOne({"ChatName": request.body.receiver});
    // receiver.Messages.push(msg);

    await Bunny.findOneAndUpdate({"ChatName": request.body.receiver}, {$push: {Messages: msg}});
};