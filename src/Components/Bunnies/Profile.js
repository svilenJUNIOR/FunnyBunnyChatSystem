import "./Styles/Profile.css"
import { NavLink } from "react-router-dom";

export const Profile = (props) => {

    if (props.me.IsPremium == "false") {
        return (
            <div className="NotPremium">
                <h1 className="t">My Profile</h1>

                <div className="FirstNote">
                    "My Profile" functionality is only available to Premium Members.
                    Upgrading to a Premium account will give you these two bonus features:
                </div>

                <ol className="MainFeatures">
                    <li>Having a list of chat friends (Max: 5)</li>
                    <li>Be visible on the main page when active</li>
                </ol>

                <div className="SecondNote">
                    Being a premium member will also give you the option
                    to add more personal information such as:
                </div>

                <ol className="MorePersonal">

                    <li>Profile picture.</li>
                    <li>Chat name</li>
                    <li>Age</li>
                    <li>Region (The habitat you prefer)</li>
                    <li>Gender</li>
                    <li>Bio section</li>
                    <li>Having a list of chat friends (Max: 5)</li>
                    <li>Be visible on the main page when active</li>

                </ol>

            </div >
        )
    }
    else {
        return (
            <div>
                <h1>My Profile</h1>
                <div className="Premium">

                    <div className="Image">
                        <img className="ProfilePic" src={props.me.Picture}></img>
                    </div>
                    <table >
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
                    </table >
                </div >

                <div className="AboutMe">
                    <h2>About Me</h2>{props.me.Bio}
                </div>


                <div className="Friends">
                    <h2 className="Friends">My Friends</h2>
                    <table className="FriendsTable">
                        {/* <tbody>
                            {props.me.Friends.map(fr => <FriendPartial key={fr._id} {...fr} />)}
                        </tbody> */}
                    </table>
                </div>

            </div >
        );
    }
}