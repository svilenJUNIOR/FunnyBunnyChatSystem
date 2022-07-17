var express = require("express")
var { ConnectWithDataBase } = require("./Data/DbContext");
var router = require("./src/Router");
var cookieParser = require("cookie-parser");
const cors = require('cors');
var app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(router);

ConnectWithDataBase()
.then(() => {
    app.listen(4000, () => console.log("I am listening"))
})
.catch((error) => {
    console.log("Error " + error);
});