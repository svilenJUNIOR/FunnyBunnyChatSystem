import "./Styles/Edit.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
var bunnyService = require("../../Services/BunnyService");


export const Edit = () => {

    var navigate = useNavigate();

    var [values, setValues] = useState({
        Name: "",
        ChatName: "",
        Breed: "",
        Age: "",
        Picture: "",
        Region: "",
        Gender: "",
        HairColor: "",
        Email: "",
        Password: "",
        SignatureJoke: "",
        Bio: "",
    });

    var SubmitHandler = async (e) => {
        e.preventDefault();
        await bunnyService.EditPersonalInfo(values);
        navigate("/Bunny/Profile");
    };

    var ChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="WraperEdit">
            <h1>Edit Personal Info</h1>
            <form method="POST" onSubmit={SubmitHandler}>
                <table className="EditTable">
                    <tbody>
                        <tr>
                            <td colSpan={2}><label htmlFor="Gender"><b>Gender</b></label></td>
                            <td colSpan={2}><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Gender" value={values.Gender} onChange={ChangeHandler} required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Picture"><b>Picture</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Picture" value={values.Picture} onChange={ChangeHandler} required/></td>

                            <td><label htmlFor="Region"><b>Region</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Region" value={values.Region} onChange={ChangeHandler} required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="ChatName"><b>ChatName</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="ChatName" value={values.ChatName} onChange={ChangeHandler} required/></td>

                            <td><label htmlFor="Age"><b>Age</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Age" value={values.Age} onChange={ChangeHandler} required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Email"><b>Email</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Email" value={values.Email} onChange={ChangeHandler} required/></td>

                            <td><label htmlFor="Password"><b>Password</b></label></td>
                            <td><input type="password" placeholder="asbgsrrgasfdasbvsa" name="Password" value={values.Password} onChange={ChangeHandler} required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Name"><b>Name</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Name" value={values.Name} onChange={ChangeHandler} required/></td>

                            <td><label htmlFor="HairColor"><b>Hair Color</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="HairColor" value={values.HairColor} onChange={ChangeHandler} required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Breed"><b>Breed</b></label></td>
                            <td>
                                <select className="Breed" name="Breed" value={values.Breed} onChange={ChangeHandler} required>
                                    <option value="Default" defaultValue>Not Selected</option>
                                    <option value="DutchDwarf">Duch Dwarf</option>
                                    <option value="LionHead">Lion Head</option>
                                    <option value="BelgiumGiant">Belgium Giant</option>
                                    <option value="WildBreed">Wild Breed</option>
                                </select>
                            </td>

                            <td><label htmlFor="SignatureJoke"><b>Signature Joke</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="SignatureJoke" value={values.SignatureJoke} onChange={ChangeHandler} required/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Bio"><b>Bio: </b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Bio" value={values.Bio} onChange={ChangeHandler} required/></td>
                            <td colSpan={2}><button type="submit">Edit</button></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    );
}