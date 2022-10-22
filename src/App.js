import "./style/App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Join from "./Join";

function App() {
    // basename="/cbv2"
    // "homepage": "https://packirisamykaran.github.io/cbv2",
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Join />} />
                    <Route path="/faq" element={<div>faq</div>} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
