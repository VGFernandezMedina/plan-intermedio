import Menu from "../../components/menu/Menu";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Testimonials from "../../components/testimonials/Testimonials";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Home />
      <Menu />
      <About />
      <Contact />
      <Testimonials />
    </>
  );
};

export default HomePage;
