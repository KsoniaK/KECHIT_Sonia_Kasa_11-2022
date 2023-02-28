import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../src/styles/Index.css";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Data from "./service/logements.json";

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    setHouses(Data);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil houses={houses} />} />
        <Route path="/logement/:id" element={<Logement houses={houses} />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/404" excat={true} element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
