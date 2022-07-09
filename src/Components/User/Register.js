import "./Register.css"

export const Register = () => {
    return (
        <div className="RegisterForm">
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
                                <label htmlFor="SignatureJoke"><b>Signature Joke</b></label>

                            </td>
                            <td>
                                <input type="text" placeholder="Enter Signature Joke" name="SignatureJoke" required />
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p>Sign Up</p>
                            </td>

                            <td>
                                <button type="submit">Sign Up</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}