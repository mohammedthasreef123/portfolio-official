import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
