import { NavLink } from "react-router-dom";

export var BunnyPartial = ({Picture, ChatName, Age, Region, Gender, Breed, LookingFor}) => {
    return(
        <tr>
        <td><img src={Picture}></img></td>
        <td>{ChatName}</td>
        <td>{Age}</td>
        <td>{Region}</td>
        <td>{Gender}</td>
        <td>{Breed}</td>
        <td>{LookingFor}</td>
        <td><NavLink to="/Chat"><button type="submit">Chat</button></NavLink></td>
    </tr>
    )
   
}