import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMusic,
  faBuildingColumns,
  faStar,
  faHeartMusicCameraBolt,
} from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const AboutCards = ({ items, mainTitle }) => {
  const defaultItems = [
    {
      icon: faHeartMusicCameraBolt,
      title: "FESTIVALS",
      description: "Historic events, vintage weekends and local festivals.",
    },
    {
      icon: faHeart,
      title: "CHARITY EVENTS",
      description: "Helping raise money with memoroble live performances.",
    },
    {
      icon: faMusic,
      title: "CONCERTS",
      description:
        "Traditional swing concerts and modern classics for music lovers ",
    },
    {
      icon: faBuildingColumns,
      title: "COMMUNITY EVENTS",
      description: "Supporting local organisations and celebrations",
    },
    {
      icon: faStar,
      title: "SEASONAL EVENTS",
      description: "Christmas concerts and special performances.",
    },
  ];

  const data = items || defaultItems;

  return (
    <div className="about-container">
      <div className="h2-title">
        <span className="divider"></span>
        <h2>{mainTitle}</h2>
        <span className="divider"></span>
      </div>
      <div className="about-card-container">
        {data.map((card, i) => (
          <div className="card" key={i}>
            <div className="img-outer">
              {card.icon && (
                <FontAwesomeIcon
                  icon={card.icon}
                  alt={card.title}
                  className="card-icon"
                />
              )}
            </div>
            <h4 className="title">{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
