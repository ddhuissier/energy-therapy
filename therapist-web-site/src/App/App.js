import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Informations } from "../components/Informations";
import { Contact } from "../components/Contact";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

function App() {
  return (
    <Router>
      <Header />
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/energy-therapy" element={<Home />} />
        <Route path="/energy-therapy/about" element={<About />} />
        <Route path="/energy-therapy/informations" element={<Informations />} />
        <Route path="/energy-therapy/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
