import Button from "../../button";
import "./index.scss";

const events = [
  {
    day: "24",
    month: "AUG",
    title: "Salute to the '40s",
    venue: "Historic Dockyard Chatham",
    location: "Chatham, Kent",
    featured: true,
  },
  {
    day: "07",
    month: "SEP",
    title: "Summer Bandstand",
    venue: "The Vine Bandstand",
    location: "Kent",
  },
  {
    day: "21",
    month: "SEP",
    title: "Charity Concert",
    venue: "Community Hall",
    location: "Medway, Kent",
  },
];

const EventCards = () => {
  return (
    <section className="events" id="events">
      <div className="events__container">
        <div className="heading">
          <div className="h2-title">
            <span className="divider" />

            <h2>Upcoming Events</h2>

            <span className="divider" />
          </div>
          <p>
            Experience the Peninsula Big Band live at festivals, concerts and
            community events across Kent and the South East.
          </p>
        </div>

        {/* Event cards */}
        <div className="events__grid">
          {events.map((event, index) => (
            <article
              className={`event-card ${
                event.featured ? "event-card--featured" : ""
              }`}
              key={`${event.title}-${index}`}
            >
              {/* Decorative background */}
              <div className="event-card__pattern" />

              {/* Date */}
              <div className="event-card__date">
                <span className="event-card__day">{event.day}</span>

                <span className="event-card__month">{event.month}</span>
              </div>

              {/* Decorative divider */}
              <div className="event-card__divider">
                <span />
                <i>◇</i>
                <span />
              </div>

              {/* Event information */}
              <div className="event-card__content">
                <span className="event-card__label">
                  {event.featured ? "Featured Event" : "Live Performance"}
                </span>

                <h3>{event.title}</h3>

                <p className="event-card__venue">{event.venue}</p>

                <p className="event-card__location">{event.location}</p>
              </div>

              {/* CTA */}
              <a href="#" className="event-card__link">
                <span>View Event</span>
                <span className="event-card__arrow">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* All events */}
        <div className="events__footer">
          <Button text="View all Events" link="/events" />
        </div>
      </div>
    </section>
  );
};

export default EventCards;
