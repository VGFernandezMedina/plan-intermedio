import Menu from "../components/menu/Menu";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Home />
      <Menu />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
