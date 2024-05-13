
import Header from "./Components/1-Header/Header"
import Home from "./Components/Home/2-Home"
import About from "./Components/About/About"
import Project from "./Components/Projects/Project"
import Contact from "./Components/Contact/Contact"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import Loding from "./Components/Loding/Loding"
import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false);
      },4500);
    });
  }, []);


  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loding />
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
