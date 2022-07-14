import { NavBar } from "../Components/Common/NavBar"
import { Register } from "../Components/User/Register"
import { Login } from "../Components/User/Login"
import { All } from "../Components/Bunnies/All"
import { Profile } from "../Components/Bunnies/Profile"
import { ChatRoom } from "./Bunnies/ChatRoom"
import { Edit } from "../Components/Bunnies/Edit"
import { HomePage } from "../Components/Common/HomePage"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <main>
            <NavBar />
            <div className="Content">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="Bunny/Profile" element={<Profile />} />
                    <Route path="Bunny/All" element={<All />} />
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