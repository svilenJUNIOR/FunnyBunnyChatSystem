import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

var bunnyService = require("../../Services/BunnyService")

export const AddFriend = async () => {
    var location = useLocation();
    var navigate = useNavigate();

    var result = await bunnyService.AddFriend(location);
    navigate("Bunny/Profile")
}