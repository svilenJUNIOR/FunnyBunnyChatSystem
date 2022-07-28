import "./Styles/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    let navigate = useNavigate();

    var [values, setValues] = useState({
        Name: "",
        Password: "",
        Email: "",
        Breed: "",
        HairColor: "",
        SignatureJoke: "",
    });

    var changeHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    var SubmitHandler = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:4000/User/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        });

        navigate("http://localhost:3000/User/Login");
    }

    return (
        <div className="WraperRegister">
            <form method="POST" onSubmit={SubmitHandler}>
                <table className="RegisterTable">
                    <tbody>
                        <tr>
                            <td><label htmlFor="Email"><b>Email</b></label></td>
                            <td><input type="text" placeholder="Enter Email" name="Email" required value={values.Email} onChange={changeHandler} /></td>

                            <td><label htmlFor="Password"><b>Password</b></label></td>
                            <td><input type="password" placeholder="Enter Password" name="Password" required value={values.Password} onChange={changeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Name"><b>Name</b></label></td>
                            <td><input type="text" placeholder="Enter Name" name="Name" required value={values.Name} onChange={changeHandler} /></td>

                            <td><label htmlFor="HairColor"><b>Hair Color</b></label></td>
                            <td><input type="text" placeholder="Enter Hair color" name="HairColor" required value={values.HairColor} onChange={changeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Breed"><b>Breed</b></label></td>
                            <td>
                                <select className="Breed" name="Breed" value={values.Breed} onChange={changeHandler}>
                                    <option value="Default" defaultValue>Not Selected</option>
                                    <option value="DutchDwarf">Duch Dwarf</option>
                                    <option value="LionHead">Lion Head</option>
                                    <option value="BelgiumGiant">Belgium Giant</option>
                                    <option value="WildBreed">Wild Breed</option>
                                </select>
                            </td>

                            <td><label htmlFor="SignatureJoke"><b>Signature Joke</b></label></td>
                            <td><input type="text" placeholder="Enter Signature Joke" name="SignatureJoke" required value={values.SignatureJoke} onChange={changeHandler} /></td>
                        </tr>

                        <tr>
                            <td colSpan={4}><button type="submit">Sign Up</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}