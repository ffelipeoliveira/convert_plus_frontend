import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useLoading } from "./hooks/useLoading";
import { FullScreenLoading } from "./components/common/Loading";
import { useHashScroll } from "./hooks/useHashScroll";
import Background from "./components/layout/Background";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./pages/about";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Formats from "./pages/format/Formats";
import Supported from "./pages/supported";

function AppContent() {
  const isLoading = useLoading();
  useHashScroll();

  if (isLoading) {
    return <FullScreenLoading />;
  }

  return (
    <>
      <Background />
      <div className="relative z-10">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/supported" element={<Supported/>}/>
            <Route path="/format/:format" element={<Formats/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;