import { NavBar } from "../Components/Common/NavBar"
import { Register } from "../Components/User/Register"
import { Login } from "../Components/User/Login"
import { All } from "../Components/Bunnies/All"
import { Home } from "../Components/Common/Home"
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"

const styles = {
    marginLeft: "20px", 
    marginTop: "20px",
    backgroundColor:"white", 
    width:"800px",
    height: "650px"
}

function App() {
    return (
        <main>
            <HashRouter>
                <NavBar />

                <div className="Content" style={styles}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/All" element={<All />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                    </Routes>

                </div>
            </HashRouter>
        </main>
    );
}

export default App;