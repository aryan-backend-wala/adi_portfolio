import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";

export default function App(){
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      {/* <Featured /> */}
      <Footer />
    </>
  );
}