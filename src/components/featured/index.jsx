import Button from "../button";
import quarter from "../../assets/images/quarter.webp";
import { events } from "../../eventsData";
import "./index.scss";

const Featured = () => {
 const featuredEvent = events.slice(2, 3)
  return (
    <div className="featured-container">
      {featuredEvent.map((event) => (
      <>
      <img src={quarter} alt="" className="top-left quarter" />
      <img src={quarter} alt="" className="top-right quarter" />
      <img src={quarter} alt="" className="btm-left quarter" />
      <img src={quarter} alt="" className="btm-right quarter" />

      <div className="img-text-box">
        <img
          className="feature-img"
          src={event.image}
          alt={`Penisular Big Bad, ${event.title} in Kent`}
        />
        <div className="feature-text-box">
          <span className="eyebrow">Featured Event</span>
          <h3 className="feature-title">{event.title}</h3>
          <p>{event.p}</p>
          <Button text="Find out more" link={`/events/#${event.id}`} />
        </div>
      </div>
      </>
      ))};
     
    </div>
  );
};

export default Featured;
