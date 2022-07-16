import  { NavLink } from "react-router-dom";

export var FriendPartial = ({ChatName}) => {
    <tr>{ChatName} - <NavLink to="/Chat"><button>Chat</button></NavLink></tr>
}