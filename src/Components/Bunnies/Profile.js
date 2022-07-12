import "./Styles/Profile.css"

export const Profile = () => {
    return (
        <div>
            <h1 className="ProfileHeading">My Profile</h1>

            <div className="Wrapper">

                <div className="Image">
                    <img className="ProfilePic" src="https://i.ytimg.com/vi/n1wUYGvCOkA/maxresdefault.jpg"></img>
                </div>

                <div className="Info">
                    <h2 className="PersonalInfo">Personal Info</h2>
                    <table className="InfoTable">
                        <tbody>
                            <tr>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                            </tr> 
                            <tr> 
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                            </tr> 
                            <tr> 
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                                <td><p>Name: Ivan</p></td>
                            </tr>
                            <tr>
                                <td colspan={4}><button className="EditButton">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="AboutMe">
                    <h2>About Me</h2>
                    sdibuo;sdhvodshiovhdiohvuowehghewgfwehfoghweoufhuoewhgfouwehfovweiofhweiohgfoqwehfwei
                    wefuiweghfuhweuofhuowehfowehwuiofhewuohfuoewbfvuowndvoweuohfuoewhgfiohwdohvfoweuifh
                    qwfuwehgfuwehfohewofheohfuoehfduoweqhfuoehu
                </div>


                <div className="Friends">
                    <h2 className="Friends">My Friends</h2>
                    <table className="FriendsTable">
                        <tbody>
                            <tr>friendName - <button>Chat</button></tr>
                            <tr>friendName - <button>Chat</button></tr>
                            <tr>friendName - <button>Chat</button></tr>
                            <tr>friendName - <button>Chat</button></tr>
                            <tr>friendName - <button>Chat</button></tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
}