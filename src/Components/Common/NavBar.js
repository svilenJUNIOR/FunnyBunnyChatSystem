import "./Styles/NavBar.css"
import  { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <ul>
             <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="Bunny/Profile">Profile</NavLink></li>
            <li><NavLink to="Bunny/Chat">Chat Room</NavLink></li>
            <li><NavLink to="Bunny/Edit">Edit</NavLink></li>
            <li><NavLink to="User/Login">Login</NavLink></li>
            <li><NavLink to="User/Register">Register</NavLink></li>
        </ul>
    );
}