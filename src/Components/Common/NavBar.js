import "./NavBar.css"
import  { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/All">All Bunnies</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Register">Register</NavLink></li>
        </ul>
    );
}