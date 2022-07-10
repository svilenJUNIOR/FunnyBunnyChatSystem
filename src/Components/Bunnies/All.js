import "./Styles/All.css"

export const All = () => {
    return (
        <div>
            <h1>Don't be shy and check out all available bunnies</h1>
            <table className="AllBunnies">
                <tbody>
                    <tr>
                        <td>Picture</td>
                        <td>Chat name</td>
                        <td>Age</td>
                        <td>Region</td>
                        <td>Gender</td>
                        <td>Breed</td>
                        <td>Looking for</td>
                    </tr>

                    <tr>
                        <td><img src="https://static1.bigstockphoto.com/0/8/1/large1500/180044350.jpg"></img></td>
                        <td>Funny Bone Licker</td>
                        <td>18</td>
                        <td>Polqna</td>
                        <td>Male</td>
                        <td>Dutch Dwarf</td>
                        <td>You</td>
                    </tr>

                    <tr>
                        <td><img src="https://cdn.wallpapersafari.com/16/76/eUij9X.jpg"></img></td>
                        <td>Rich and needy daughter</td>
                        <td>23</td>
                        <td>Po zelena polqna</td>
                        <td>Female</td>
                        <td>Lion Head</td>
                        <td>Beta males to destroy mentally</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};