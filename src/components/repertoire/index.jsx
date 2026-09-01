import g4 from "../../assets/images/g4.jpg";
import rep1 from "../../assets/images/rep1.jpg";
import Button from "../button";
import "./index.scss";

const repertoireItems = [
  {
    eyebrow: "The Greats",
    title: "Swing Legends",
    image: rep1,
    artists: [
      "Glenn Miller",
      "Count Basie",
      "Tommy Dorsey",
      "Duke Ellington",
      "Benny Goodman",
      "Artie Shaw",
      "Cab Calloway",
    ],
  },
  {
    eyebrow: "A Modern Twist",
    title: "Modern Classics",
    image: g4,
    artists: ["The Beatles", "Sade", "Michael Jackson", "Ray Charles"],
  },
];

const Repertoire = () => {
  return (
    <section className="repertoire" id="repertoire">
      {/* Section heading */}
      <div className="heading">
        <div className="h2-title">
          <span className="divider" />

          <h2>Our Repertoire</h2>

          <span className="divider" />
        </div>

        <p>
          From the legendary dance bands of the 1930s and 40s to modern
          favourites, our repertoire brings timeless music to every performance.
        </p>
      </div>

      {/* Repertoire items */}
      <div className="repertoire__items">
        {repertoireItems.map((item, index) => (
          <article
            className={`repertoire-card ${
              index % 2 !== 0 ? "repertoire-card--reverse" : ""
            }`}
            key={item.title}
          >
            {/* Image */}
            <div className="repertoire-card__image">
              <img src={item.image} alt="" />
            </div>

            {/* Content */}
            <div className="repertoire-card__content">
              <div className="repertoire-card__image-frame" />
              <span className="eyebrow">{item.eyebrow}</span>

              <h3>{item.title}</h3>

              <div className="repertoire-card__ornament">
                <span />
                <i>◇</i>
                <span />
              </div>

              <div className="repertoire-card__artists">
                {item.artists.map((artist) => (
                  <span key={artist}>{artist}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
        <div className="btn-container">
          <Button text="Contact us" link="/contact-us" />
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
