var express = require("express")
var { ConnectWithDataBase } = require("./Data/DbContext");
var router = require("./src/Router");

var app = express();
app.use(router);


ConnectWithDataBase()
.then(() => {
    app.listen(4000, () => console.log("I am listening"))
})
.catch((error) => {
    console.log("Error " + error);
});