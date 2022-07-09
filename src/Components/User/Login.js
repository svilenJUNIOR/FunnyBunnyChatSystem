import "./Login.css"

export const Login = () => {
    return (
        <div className="LoginForm">
            <form method="POST">
                <table>
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

                            <td>
                                <p>Log in</p>
                            </td>

                            <td>
                                <button type="submit">Log in</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}