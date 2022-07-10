import "./Login.css"

export const Login = () => {
    return (
        <form method="POST">
            <table className="LoginTable">
                <tbody>
                <tr>
                    <td>
                        <label htmlFor="email">Email</label>
                    </td>
                    <td>
                        <input type="text" placeholder="Enter Email" name="email" required/>
                    </td>
                </tr>
    
                <tr>
                    <td>
                        <label htmlFor="password">Password</label>
                    </td>
                    <td>
                        <input type="password" placeholder="Enter Password" name="password" required/>
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
    );
}