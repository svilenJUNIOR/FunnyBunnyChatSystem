import "./Styles/Edit.css"
import { useState } from "react"

export const Edit = () => {

    var [values, setValues] = useState({
        Name: "",
        ChatName: "",
        Breed: "",
        Age: "",
        Picture: "",
        Region: "",
        Gender: "",
        HairColor: "",
        LookingFor: "",
        Email: "",
        Password: "",
        SignatureJoke: "",
    });

    var SubmitHandler = (e) => {
        e.preventDefault();
        console.log(values);
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
                            <td><label htmlFor="Gender"><b>Gender</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Gender" value={values.Gender} onChange={ChangeHandler} /></td>

                            <td><label htmlFor="LookingFor"><b>LookingFor</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="LookingFor" value={values.LookingFor} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Picture"><b>Picture</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Picture" value={values.Picture} onChange={ChangeHandler} /></td>

                            <td><label htmlFor="Region"><b>Region</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Region" value={values.Region} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="ChatName"><b>ChatName</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="ChatName" value={values.ChatName} onChange={ChangeHandler} /></td>

                            <td><label htmlFor="Age"><b>Age</b></label></td> {/*MAYBE SOMEDAY YOU'LL NEED TO CHANGE THE AGE TO NUMBER YOU LAZY FUCK*/}
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Age" value={values.Age} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Email"><b>Email</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Email" value={values.Email} onChange={ChangeHandler} /></td>

                            <td><label htmlFor="Password"><b>Password</b></label></td>
                            <td><input type="password" placeholder="asbgsrrgasfdasbvsa" name="Password" value={values.Password} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Name"><b>Name</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="Name" value={values.Name} onChange={ChangeHandler} /></td>

                            <td><label htmlFor="HairColor"><b>Hair Color</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="HairColor" value={values.HairColor} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Breed"><b>Breed</b></label></td>
                            <td>
                                <select className="Breed" name="Breed" value={values.Breed} onChange={ChangeHandler}>
                                    <option value="Default" defaultValue>Not Selected</option>
                                    <option value="DutchDwarf">Duch Dwarf</option>
                                    <option value="LionHead">Lion Head</option>
                                    <option value="BelgiumGiant">Belgium Giant</option>
                                    <option value="WildBreed">Wild Breed</option>
                                </select>
                            </td>

                            <td><label htmlFor="SignatureJoke"><b>Signature Joke</b></label></td>
                            <td><input type="text" placeholder="asbgsrrgasfdasbvsa" name="SignatureJoke" value={values.SignatureJoke} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr><td colSpan={4}><button type="submit">Edit</button></td></tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}