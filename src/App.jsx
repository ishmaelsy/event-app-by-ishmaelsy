import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  // dark is true when dark mode is on, false when it is off
  const [dark, setDark] = useState(false);

  return (
    // if dark is true I add the class "dark" and the css changes the colours
    <div className={dark ? "app dark" : "app"}>
      <Navbar dark={dark} setDark={setDark} />

      {/* each Route shows a different page depending on the url */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
