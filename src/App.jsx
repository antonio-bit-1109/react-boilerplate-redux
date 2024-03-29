import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainComponent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
