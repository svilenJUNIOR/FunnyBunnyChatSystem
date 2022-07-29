import "./Styles/Profile.css"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
var authService = require("../../Services/AuthService");
var bunnyService = require("../../Services/BunnyService")

export const Profile = (props) => {

    var navigate = useNavigate();

    useEffect(() => {

        var info = bunnyService.ProfileData();
        var promise1 = Promise.resolve(info);
        promise1.then((value) => {

            setTimeout(() => {
                setProfileData(value);
            }, 500);
        });

        var data = authService.GetToken();
        var promise = Promise.resolve(data);
        promise.then((value) => {
            setToken(value);
        });

    }, []);

    var [token, setToken] = useState([]);

    var [profileData, setProfileData] = useState([]);

    var [bunnyInfo, setValues] = useState({
        Picture: "",
        ChatName: "",
        Age: "",
        Region: "",
        Gender: "",
        Bio: "",
        UserId: "",
    });

    var changeHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    var SubmitHandler = async (e) => {
        e.preventDefault();
        var TokenResolved = await token;
        bunnyInfo.UserId = TokenResolved.Id;
        await authService.ChangeToken();
        await bunnyService.CreateBunny(bunnyInfo);
    };

    if (profileData.length != 0) {

        var bunny = profileData[0];
        var user = profileData;

        if (!token.isPremium) {
            return (
                <div>
                    <div className="NotPremiumSection">
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

                        </ol>

                    </div >

                    <div className="BecomePremiumForm">
                        <form method="POST" onSubmit={SubmitHandler}>
                            <table className="PremiumTable">
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="Picture"><b>Profile Picture: </b></label></td>
                                        <td><input type="text" placeholder="Enter Picture" name="Picture" required value={profileData.Picture} onChange={changeHandler} /></td>

                                        <td><label htmlFor="ChatName"><b>Chat Name: </b></label></td>
                                        <td><input type="text" placeholder="Enter Chat Name" name="ChatName" required value={profileData.ChatName} onChange={changeHandler} /></td>
                                    </tr>

                                    <tr>
                                        <td><label htmlFor="Age"><b>Age: </b></label></td>
                                        <td><input type="text" placeholder="Enter Age" name="Age" required value={bunnyInfo.Age} onChange={changeHandler} /></td>

                                        <td><label htmlFor="Region"><b>Region: </b></label></td>
                                        <td><input type="Text" placeholder="Enter Your Prefered Habitat" name="Region" required value={bunnyInfo.Habitat} onChange={changeHandler} /></td>
                                    </tr>

                                    <tr>

                                        <td><label htmlFor="Gender"><b>Gender: </b></label></td>
                                        <td>
                                            <select className="Gender" name="Gender" value={bunnyInfo.Gender} onChange={changeHandler}>
                                                <option value="Default" defaultValue>Not Selected</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </td>

                                        <td><label htmlFor="Bio"><b>About Me: </b></label></td>
                                        <td><input type="text" placeholder="Enter Some Information About You" name="Bio" required value={bunnyInfo.Bio} onChange={changeHandler} /></td>
                                    </tr>

                                    <tr>
                                        <td colSpan={4}><button type="submit">Submit - 10$</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <h1>My Profile</h1>
                    <div className="Premium">

                        <div className="Image">
                            <img className="ProfilePic" src={bunny.Picture}></img>
                        </div>
                        <table >
                            <tbody>
                                <tr>
                                    <td><p>Name: {user.Name}</p></td>
                                    <td><p>ChatName: {bunny.ChatName}</p></td>
                                    <td><p>Breed: {user.Breed}</p></td>
                                    <td><p>Age: {bunny.Age}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Region: {bunny.Region}</p></td>
                                    <td><p>Gender: {bunny.Gender}</p></td>
                                    <td><p>HairColor: {user.HairColor}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Email: {user.Email}</p></td>
                                    <td><p>SignatureJoke: {user.SignatureJoke}</p></td>
                                </tr>
                                <tr>
                                    <td colspan={4}><NavLink to="/Edit"><button className="EditButton">Edit</button></NavLink></td>
                                </tr>
                            </tbody>
                        </table >
                    </div >

                    <div className="AboutMe">
                        <h2>About Me</h2>{bunny.Bio}
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
}