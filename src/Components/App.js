import { NavBar } from "../Components/Common/NavBar"
import { Register } from "../Components/User/Register"
import { Login } from "../Components/User/Login"
import { All } from "../Components/Bunnies/All"
import { Profile } from "../Components/Bunnies/Profile"
import { ChatRoom } from "../Components/Common/ChatRoom"
import { Edit } from "../Components/User/Edit"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <main>
                <NavBar />

                <div className="Content">
                    <Routes>
                        <Route path="/Home" element={<Profile />} />
                        <Route path="/All" element={<All />} />
                        <Route path="/Chat" element={<ChatRoom />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Edit" element={<Edit />} />
                    </Routes>

                </div>
        </main>
    );
}

export default App;