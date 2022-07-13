var express = require("express")
var { ConnectWithDataBase } = require("./Data/DbContext");

var app = express();

ConnectWithDataBase()
.then(() => {
    app.listen(4000, () => console.log("I am listening"))
})
.catch((error) => {
    console.log("Error " + error);
});