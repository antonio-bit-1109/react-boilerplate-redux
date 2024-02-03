import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MyMain />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
