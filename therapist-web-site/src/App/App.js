import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Informations } from "../components/Informations";
import { Contact } from "../components/Contact";
import { NavBar } from "../components/NavBar";

function App() {
  return (
    <Router>
      <Header />
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
