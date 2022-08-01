import { NavLink } from "react-router-dom";

export var BunnyPartial = ({Picture, ChatName, Age, Region, Gender, Bio}) => {
    return(
        <tr>
        <td><img src={Picture}></img></td>
        <td>Username: {ChatName}</td>
        <td>Age: {Age}</td>
        <td>Region: {Region}</td>
        <td>Gender: {Gender}</td>
        <td>Bio: {Bio}</td>
        <td><NavLink to="/Bunny/Chat" state={{ ChatName: ChatName }}
        ><button type="submit">Chat</button></NavLink></td>
    </tr>
    )
   
}