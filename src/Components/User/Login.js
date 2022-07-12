import "./Styles/Login.css"

export const Login = () => {
    return (
        <div className="WraperLogin">
            <form method="POST">
                <table className="LoginTable">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="Email"><b>Email</b></label>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Email" name="Email" required />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor="Password"><b>Password</b></label>
                            </td>
                            <td>
                                <input type="password" placeholder="Enter Password" name="Password" required />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Log In</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}