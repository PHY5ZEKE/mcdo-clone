import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import McdoCarousel from "./McdoCarousel.js";
import Services from "./Services.js";
import Footer from "./Footer.js";
import Meals from "./Meals.js";

function App() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const isLunchTime = hour > 10 || (hour === 10 && minute >= 30);

  return (
    <div>
      <Header />
      <McdoCarousel />
      <Services />
      <div
        className="text-center"
        style={{ color: isLunchTime ? "red" : "blue" }}
      >
        {isLunchTime ? <h1>It is Lunch Time</h1> : <h1>Breakfast Meals</h1>}
      </div>

      <Meals />
      <Footer />
    </div>
  );
}

export default App;
