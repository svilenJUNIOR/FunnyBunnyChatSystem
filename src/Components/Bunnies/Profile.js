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
                        </tbody>
                    </table>
                </div>

                <div className="AboutMe">
                    sdibuo;sdhvodshiovhdiohvuowehghewgfwehfoghweoufhuoewhgfouwehfovweiofhweiohgfoqwehfwei
                    wefuiweghfuhweuofhuowehfowehwuiofhewuohfuoewbfvuowndvoweuohfuoewhgfiohwdohvfoweuifh
                    qwfuwehgfuwehfohewofheohfuoehfduoweqhfuoehu
                </div>


                <div className="Friends">
                    <h2 className="Friends">My Friends</h2>
                    <table className="FriendsTable">
                        <tbody>
                            <tr>friendName</tr>
                            <tr>friendName</tr>
                            <tr>friendName</tr>
                            <tr>friendName</tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
}