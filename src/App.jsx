import "./App.css";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Intro from "./components/Intro";
// import Marketing from "./components/Marketing";
import NavBar from "./components/NavBar";
import TypeAnimationBox from "./components/TypeAnimationBox";
function App() {
  return (
    <div className="w-full">
      <NavBar />
      <Intro />
      <ImageCarousel />
      <TypeAnimationBox />
      {/* <Marketing /> */}
      <Footer />
    </div>
  );
}

export default App;
