import { NavBar } from "../Components/Common/NavBar"
import { Register } from "../Components/User/Register"
import { Login } from "../Components/User/Login"
import { All } from "../Components/Bunnies/All"
import { Profile } from "../Components/Bunnies/Profile"
import { ChatRoom } from "./Bunnies/ChatRoom"
import { Edit } from "../Components/Bunnies/Edit"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

function App() {

    var [bunnies, setBunnies] = useState([]);
    var [me, setMyProfile] = useState([]);

    useEffect(() => {
        async function GetBunnies() {
            var response = await axios.get("http://localhost:4000/Bunny/All");
            setBunnies(response.data);
        }
        GetBunnies();
    }, []);

    useEffect(() => {
        async function MyProfile() {
            var response = await axios.get("http://localhost:4000/Bunny/Profile");
            setMyProfile(response.data);
        }
        MyProfile();
    }, []);

    return (
        <main>
            <NavBar />
            <div className="Content">
                <Routes>
                    <Route path="/" element={<All bunnies={bunnies} />} />
                    <Route path="User/Register" element={<Register />} />
                    <Route path="User/Login" element={<Login />} />
                    <Route path="Bunny/Profile" element={<Profile me={me} />} />
                    <Route path="Bunny/Chat" element={<ChatRoom />} />
                    <Route path="Bunny/Edit" element={<Edit />} />
                </Routes>

            </div>
        </main>
    );
}

export default App;