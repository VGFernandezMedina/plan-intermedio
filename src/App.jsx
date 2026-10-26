import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import SobreNosotros from "./pages/sobrenosotros/SobreNosotros";
import Contacto from "./pages/contacto/Contacto";

const App = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
