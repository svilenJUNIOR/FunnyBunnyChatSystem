import { NavBar } from "../Components/Common/NavBar"
import { Register } from "../Components/User/Register"
import { Login } from "../Components/User/Login"
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <main>
            <HashRouter>
                <NavBar />

                <div className="Content">
                    <Routes>
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                    </Routes>

                </div>
            </HashRouter>
        </main>
    );
}

export default App;