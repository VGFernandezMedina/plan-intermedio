import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import SobreNosotros from "./pages/sobrenosotros/SobreNosotros";
import MenuPage from "./pages/menupage/MenuPage";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import WhatsAppButton from "./components/whatsappbutton/WhatsAppButton";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavbarC />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
