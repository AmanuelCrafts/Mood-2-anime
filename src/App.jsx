import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AnimeContainer from "./pages/AnimeContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:emotion" element={<AnimeContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
