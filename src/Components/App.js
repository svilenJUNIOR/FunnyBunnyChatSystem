import { NavBar } from "../Components/Common/NavBar"
import { Register } from "../Components/User/Register"
import { Login } from "../Components/User/Login"
import { All } from "../Components/Bunnies/All"
import { Profile } from "../Components/Bunnies/Profile"
import { ChatRoom } from "./Bunnies/ChatRoom"
import { Edit } from "../Components/Bunnies/Edit"
import { HomePage } from "../Components/Common/HomePage"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

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
                    <Route path="/" element={<HomePage />} />
                    <Route path="Bunny/Profile" element={<Profile me={me} />} />
                    <Route path="Bunny/All" element={<All bunnies={bunnies} />} />
                    <Route path="Bunny/Chat" element={<ChatRoom />} />
                    <Route path="User/Register" element={<Register />} />
                    <Route path="User/Login" element={<Login />} />
                    <Route path="Bunny/Edit" element={<Edit />} />
                </Routes>

            </div>
        </main>
    );
}

export default App;