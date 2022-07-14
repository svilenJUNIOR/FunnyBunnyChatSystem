import "./Styles/NavBar.css"
import  { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <ul>
            <li><NavLink to="Bunny/Profile">Home</NavLink></li>
            <li><NavLink to="Bunny/All">All Bunnies</NavLink></li>
            <li><NavLink to="User/Login">Login</NavLink></li>
            <li><NavLink to="User/Register">Register</NavLink></li>
            <li><NavLink to="Bunny/Chat">Chat Room</NavLink></li>
            <li><NavLink to="Bunny/Edit">Edit</NavLink></li>
        </ul>
    );
}