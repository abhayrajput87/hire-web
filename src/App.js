import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div >
          <Navbar></Navbar>
          <Hero></Hero>
          <Offers></Offers>
          <Plan></Plan>
          <Rooms></Rooms>
          <ImageSlider/>
    </div>
  );
}

export default App;
