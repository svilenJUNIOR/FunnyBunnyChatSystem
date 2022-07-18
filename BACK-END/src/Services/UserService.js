var hasher = require("bcrypt");
var User = require("../../Data/Models/User")
var jwt = require("jsonwebtoken");

var { promisify } = require("util");
var jwtVerify = promisify(jwt.verify);

exports.GetById = async (Id) => await User.findById(Id).lean();

exports.Register = async (request, response) => {
    var password = await hasher.hash(request.body.Password, 10);

    await User.create({
        Breed: request.body.Breed,
        Email: request.body.Email,
        HairColor: request.body.HairColor,
        Name: request.body.Name,
        SignatureJoke: request.body.SignatureJoke,
        Password: password,
        HasBunny: false,
    })
};

exports.Login = async (request, response) => {
    var user = await User.findOne({ Email: request.body.Email });

    let token = new Promise((resolve, reject) => {
        jwt.sign({ Id: user._id, Email: user.Email, isPremium: user.HasBunny }, "JWTSecret", { expiresIn: '2d' }, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    });
    var jwtToken = await token;
    response.cookie("IsAuth", jwtToken);
    response.send(user);
};

exports.Verify = async (request, response) => {
    var token = request.cookies["IsAuth"];

    if (token) {
        let decodedToken = await jwtVerify(token, "JWTSecret");

        request.user = decodedToken;
        response.locals.user = decodedToken;
        response.send(decodedToken);
    }
}