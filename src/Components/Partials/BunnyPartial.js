import { NavLink } from "react-router-dom";

export var BunnyPartial = ({Picture, ChatName, Age, Region, Gender, Breed, LookingFor}) => {
    return(
        <tr>
        <td><img src={Picture}></img></td>
        <td>Username: {ChatName}</td>
        <td>Age: {Age}</td>
        <td>Region: {Region}</td>
        <td>Gender: {Gender}</td>
        <td>Breed: {Breed}</td>
        <td><NavLink to="/Chat"><button type="submit">Chat</button></NavLink></td>
    </tr>
    )
   
}