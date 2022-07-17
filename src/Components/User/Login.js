import "./Styles/Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    var navigate = useNavigate();

    var [values, setValues] = useState({
        Email: "",
        Password: "",
    });

    var SubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/User/Login", values);
        navigate("/");
    }

    var ChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div className="WraperLogin">
            <form method="POST" onSubmit={SubmitHandler}>
                <table className="LoginTable">
                    <tbody>
                        <tr>
                            <td><label htmlFor="Email"><b>Email</b></label></td>
                            <td><input type="text" placeholder="Enter Email" name="Email" required value={values.Email} onChange={ChangeHandler}/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="Password"><b>Password</b></label></td>
                            <td><input type="password" placeholder="Enter Password" name="Password" required value={values.Password} onChange={ChangeHandler}/></td>
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