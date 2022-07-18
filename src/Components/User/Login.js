import "./Styles/Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
var authService = require("../../Services/AuthService");

export const Login = () => {

    var navigate = useNavigate();

    var [values, setValues] = useState({
        Email: "",
        Password: "",
    });

    var ChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    var SubmitHandler = async (e) => {
        e.preventDefault();
        await authService.Login(values)
        navigate("/");
    }

    return (
        <div className="WraperLogin">
            <form method="POST" onSubmit={SubmitHandler}>
                <table className="LoginTable">
                    <tbody>
                        <tr>
                            <td><label htmlFor="Email"><b>Email</b></label></td>
                            <td><input type="text" placeholder="Enter Email" name="Email" required value={values.Email} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Password"><b>Password</b></label></td>
                            <td><input type="password" placeholder="Enter Password" name="Password" required value={values.Password} onChange={ChangeHandler} /></td>
                        </tr>

                        <tr>
                            <td colSpan={2}><button type="submit">Log In</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}