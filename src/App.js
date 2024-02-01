import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import McdoCarousel from "./McdoCarousel.js";
import Services from "./Services.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <Header />
      <McdoCarousel />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
