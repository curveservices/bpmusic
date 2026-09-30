import { events } from "../../eventsData";
import "./index.scss";

const EventsGrid = () => {
  const eventItems = events
  return (
    <section className="events__grid" id="events">
      {/* Section heading */}
      <div className="heading">
        <div className="h2-title">
          <span className="divider" />
          <h2>Upcoming Events</h2>
          <span className="divider" />
        </div>
      </div>
      {/* Event items */}
      <div className="events__items">
        {eventItems.map((item, index) => (
          <article
            className={`events__card ${
              index % 2 !== 0 ? "events__card-reverse" : ""
              }`}
            id={item.id}
            key={item.id}
          >
            {/* date - time */}
            <div className="events-card__date">
              {/* Decorative background */}
              <div className="events-card__pattern" />
              <span className="events-card__day">{item.day}</span>
              <span className="events-card__number">{item.date}</span>
              <span className="events-card__month">{item.month}</span>
              <span className="events-card__year">{item.year}</span>
              {/* Decorative divider */}
              <div className="events-card__divider">
                <span />
                <i>◇</i>
                <span />
              </div>
              <span className="events-card__time">{item.time}</span>
            </div>
            {/* Event information */}
            <div className="events-card__content">
              <span className="eyebrow">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p className="events-card__venue">{item.location}</p>
              <p className="events-card__info">{item.p}</p>
              <p className="events-card__venue">Tickets: {item.ticket}</p>
            </div>
            {/* Image */}
            <div className="events-card__image">
              <img src={item.image} alt={item.title} />
            </div>
          </article>
        ))}
        ;
      </div>
    </section>
  );
};

export default EventsGrid;
