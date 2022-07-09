import "./NavBar.css"

export const Header = () => {
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#">All Bunnies</a></li>
            <li><a href="#Login">Login</a></li>
            <li><a href="#Register">Register</a></li>
        </ul>
    );
}