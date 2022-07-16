import { FriendPartial } from "../Partials/FriendPartial"
import  { NavLink } from "react-router-dom";

export var ProfilePartial = (props) => {
    return (
        <div className="Wrapper">

            <div className="Image">
                <img className="ProfilePic" src={props.me.Picture}></img>
            </div>

            <div className="Info">
                <h2 className="PersonalInfo">Personal Info</h2>
                <table className="InfoTable">
                    <tbody>
                        <tr>
                            <td><p>Name: {props.me.Name}</p></td>
                            <td><p>ChatName: {props.me.ChatName}</p></td>
                            <td><p>Breed: {props.me.Breed}</p></td>
                            <td><p>Age: {props.me.Age}</p></td>
                        </tr>
                        <tr>
                            <td><p>Picture: {props.me.Picture}</p></td>
                            <td><p>Region: {props.me.Region}</p></td>
                            <td><p>Gender: {props.me.Gender}</p></td>
                            <td><p>HairColor: {props.me.HairColor}</p></td>
                        </tr>
                        <tr>
                            <td><p>LookingFor: {props.me.LookingFor}</p></td>
                            <td><p>Email: {props.me.Email}</p></td>
                            <td><p>Password: Can't show this one</p></td>
                            <td><p>SignatureJoke: {props.me.SignatureJoke}</p></td>
                        </tr>
                        <tr>
                            <td colspan={4}><NavLink to="/Edit"><button className="EditButton">Edit</button></NavLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="AboutMe">
                <h2>About Me</h2>{props.me.Bio}
            </div>


            <div className="Friends">
                <h2 className="Friends">My Friends</h2>
                <table className="FriendsTable">
                    <tbody>
                        {props.me.Friends.map(fr => <FriendPartial key={fr._id} {...fr} />)}
                    </tbody>
                </table>
            </div>

        </div>
    );
}