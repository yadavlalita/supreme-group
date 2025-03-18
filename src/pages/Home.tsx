import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VehicleSolutions from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <VehicleSolutions />
      <Contact /> 
      <Footer />
    </div>
  );
};

export default Home;
