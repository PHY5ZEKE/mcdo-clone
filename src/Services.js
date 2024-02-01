import { servicesData } from "./servicesData";
function Service(props) {
  return (
    <a
      href="#"
      className="services-box"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
    </a>
  );
}

function Services() {
  return (
    <section className="index-services">
      <div className="services-row">
        {servicesData.slice(0, 3).map((service, index) => (
          <Service key={index} title={service.title} image={service.image} />
        ))}
      </div>
      <div className="services-row">
        {servicesData.slice(3, 6).map((service, index) => (
          <Service key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </section>
  );
}

export default Services;
