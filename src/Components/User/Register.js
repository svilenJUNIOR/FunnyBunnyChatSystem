import "./Styles/Register.css";

export const Register = () => {
    return (
        <div className="WraperRegister">
            <form method="POST">
                <table className="RegisterTable">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="Email"><b>Email</b></label>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Email" name="Email" required />
                            </td>

                            <td>
                                <label htmlFor="Password"><b>Password</b></label>
                            </td>
                            <td>
                                <input type="password" placeholder="Enter Password" name="Password" required />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor="Name"><b>Name</b></label>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Name" name="Name" required />
                            </td>

                            <td>
                                <label htmlFor="HairColor"><b>Hair Color</b></label>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Hair color" name="HairColor" required />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor="Breed"><b>Breed</b></label>
                            </td>
                            <td>
                                <select className="Breed">
                                    <option value="Default" defaultValue>Not Selected</option>
                                    <option value="DutchDwarf">Duch Dwarf</option>
                                    <option value="LionHead">Lion Head</option>
                                    <option value="BelgiumGiant">Belgium Giant</option>
                                    <option value="WildBreed">Wild Breed</option>
                                </select>
                            </td>

                            <td>
                                <label htmlFor="SignatureJoke"><b>Signature Joke</b></label>

                            </td>
                            <td>
                                <input type="text" placeholder="Enter Signature Joke" name="SignatureJoke" required />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                <button type="submit">Sign Up</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}