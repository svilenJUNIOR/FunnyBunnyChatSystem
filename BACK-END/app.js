var express = require("express")
var cookieParser = require("cookie-parser");
var { ConnectWithDataBase } = require("./Data/DbContext");
var router = require("./src/Router");

var app = express();

app.use(express.json());
app.use(cookieParser());
app.use(router);

ConnectWithDataBase()
.then(() => {
    app.listen(4000, () => console.log("I am listening"))
})
.catch((error) => {
    console.log("Error " + error);
});