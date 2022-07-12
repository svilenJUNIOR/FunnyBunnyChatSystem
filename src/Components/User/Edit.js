import "./Styles/Edit.css"

export const Edit = () => {
    return (
        <div className="WraperEdit">
            <h1>Edit Personal Info</h1>
            <form method="POST">
                <table className="EditTable">
                    <tbody>
                        <tr>
                            <td> <label htmlFor="Gender"><b>Gender</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Gender" /></td>

                            <td><label htmlFor="LookingFor"><b>LookingFor</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="LookingFor" /></td>
                        </tr>

                        <tr>
                            <td> <label htmlFor="Picture"><b>Picture</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Picture" /></td>

                            <td><label htmlFor="Region"><b>Region</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Region" /></td>
                        </tr>

                        <tr>
                            <td> <label htmlFor="ChatName"><b>ChatName</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="ChatName" /></td>

                            <td><label htmlFor="Age"><b>Age</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Age" /></td>
                        </tr>

                        <tr>
                            <td> <label htmlFor="Email"><b>Email</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Email" /></td>

                            <td><label htmlFor="Password"><b>Password</b></label></td>
                            <td><input type="password" placeholder="asbgsrrgasfdasbvsa" name="Password" /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Name"><b>Name</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Name" /></td>

                            <td><label htmlFor="HairColor"><b>Hair Color</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="HairColor" /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Breed"><b>Breed</b></label></td>
                            <td>
                                <select className="Breed">
                                    <option value="Default" defaultValue>Not Selected</option>
                                    <option value="DutchDwarf">Duch Dwarf</option>
                                    <option value="LionHead">Lion Head</option>
                                    <option value="BelgiumGiant">Belgium Giant</option>
                                    <option value="WildBreed">Wild Breed</option>
                                </select>
                            </td>

                            <td><label htmlFor="SignatureJoke"><b>Signature Joke</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="SignatureJoke" /></td>
                        </tr>

                        <tr><td colSpan={4}><button type="submit">Edit</button></td></tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}