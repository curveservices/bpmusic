import salute from "../../assets/images/salute-40s.jpg";
import rep from "../../assets/images/g4.jpg";
import g4 from "../../assets/images/rep1.jpg";
import "./index.scss";

const eventItems = [
  {
    eyebrow: "1940's festival",
    title: "Salute to the '40s",
    location: "Historic Dockyard Chatham",
    p: "We're delighted to return to this fantastic festival celebrating the music, vehicles and spirit of the 1940s.",
    ticket: "£15.00",
    image: salute,
    day: "Sunday",
    number: 24,
    month: "August",
    year: 2026,
    time: "4:00pm",
  },
  {
    eyebrow: "Summer concert",
    title: "Swing in the park",
    location: "victoria park, faversham",
    p: "A free afternoon concert in the beautiful surroundings of Victoria Park. Bring a picnic, sit back and enjoy the music.",
    ticket: "free entry",
    image: g4,
    day: "Sunday",
    number: "06",
    month: "July",
    year: 2026,
    time: "2:00pm",
  },
  {
    eyebrow: "Dinner dance",
    title: "Salute to swing",
    location: "the woodville, gravesend",
    ticket: "£18.00",
    p: "An evening of classic swing favourites from the golden era. Dust off your dancing shoes and join us for a night to remember.",
    image: rep,
    day: "Saturday",
    number: 14,
    month: "jume",
    year: 2026,
    time: "7:30pm",
  },
];

const EventsGrid = () => {
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
            key={item.title}
          >
            {/* date - time */}
            <div className="events-card__date">
              {/* Decorative background */}
              <div className="events-card__pattern" />
              <span className="events-card__day">{item.day}</span>
              <span className="events-card__number">{item.number}</span>
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
