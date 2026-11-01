import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Looks from "./pages/Looks";
import Capsule from "./pages/Capsule";
import Letters from "./pages/Letters";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/looks" element={<Looks />} />
            <Route path="/capsule" element={<Capsule />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}