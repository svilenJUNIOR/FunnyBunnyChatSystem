var hasher = require("bcrypt");
var Bunny = require("../../Data/Models/Bunny")

exports.Register = async (request, response) => {

    var Email = request.body.Email;
    var HairColor = request.body.HairColor;
    var Breed = request.body.Breed;
    var Name = request.body.Name;
    var SignatureJoke = request.body.SignatureJoke;
    var Password = request.body.Password;
    // var hashedPassword = await hasher.hash(Password, 10);

    var addedUser = Bunny.create({
        Email: Email,
        HairColor: HairColor,
        Breed: Breed,
        Name: Name,
        SignatureJoke: SignatureJoke,
        Password: Password,
    });

    return addedUser;
};
