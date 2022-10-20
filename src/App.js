import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Footer";

function App() {
    // basename="/cbv2"
    // "homepage": "https://packirisamykaran.github.io/cbv2",
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/about" element={<div>about</div>} />
                    <Route path="/faq" element={<div>faq</div>} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
