import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AnimeContainer from "./pages/AnimeContainer";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:emotion" element={<AnimeContainer />} />
        {/* 404 Page Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
