import { breakfastData } from "./breakfastData.js";
import { lunchData } from "./lunchData.js";

function Meal(props) {
  return (
    <a
      href="#"
      className="meals-box"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
    </a>
  );
}

function Meals() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const isLunchTime = hour > 10 || (hour === 10 && minute >= 30);

  const dataToUse = isLunchTime ? lunchData : breakfastData;

  return (
    <section className="index-meals">
      <div className="services-row">
        {dataToUse.slice(0, 3).map((service, index) => (
          <Meal key={index} title={service.title} image={service.image} />
        ))}
      </div>
      <div className="services-row">
        {dataToUse.slice(3, 6).map((service, index) => (
          <Meal key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </section>
  );
}

export default Meals;
