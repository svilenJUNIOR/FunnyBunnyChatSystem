export const Login = () => {
    return (
        <form method="POST">
            <table>
                <tbody>
                <tr>
                    <td>
                        <label htmlFor="email">Email</label>
                    </td>
                    <td>
                        <input type="text" name="email" required/>
                    </td>
                </tr>
    
                <tr>
                    <td>
                        <label htmlFor="password">Password</label>
                    </td>
                    <td>
                        <input type="password" name="password" required/>
                    </td>
                </tr>
    
                <tr>
                    <td>
                        <p>Submit</p>
                    </td>
                    <td>
                        <button type="submit">Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}