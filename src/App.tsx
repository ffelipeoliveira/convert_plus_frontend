import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useLoading } from "./hooks/useLoading";
import { FullScreenLoading } from "./components/common/Loading/Loading";
import { useHashScroll } from "./hooks/useHashScroll";

import Background from "./components/layout/Background/Background";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import About from "./components/sections/about";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Supported from "./pages/supported";

function App() {
    const isLoading = useLoading();

    if (isLoading) {
        return <FullScreenLoading/>
    }

    return (
        <BrowserRouter>
            <HashScrollHandler/>
            <Background/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/supported" element={<Supported/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

function HashScrollHandler() {
  useHashScroll();
  return null;
}

export default App;