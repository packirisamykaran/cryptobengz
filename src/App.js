import "./style/App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Join from "./Join";
import Merchant from "./Merchant";
import ScrollToTop from "./ScrollToTop";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function App() {
  function getLibrary(provider) {
    return new Web3(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/merchant" element={<Merchant />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
