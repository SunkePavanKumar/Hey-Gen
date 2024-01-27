import "./App.css";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import TypeAnimationBox from "./components/TypeAnimationBox";
function App() {
  return (
    <div className="w-full">
      <NavBar />
      <Intro />
      <ImageCarousel />
      <TypeAnimationBox />
      <Footer />
    </div>
  );
}

export default App;
