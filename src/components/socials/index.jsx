import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.scss";

const Socials = () => {
  return (
    <>
      <ul className="iconList">
        <li className="icons">
          <Link
            to="https://www.facebook.com/LittleLearnersPlaygroup"
            target="_blank"
            alt="facebook"
            aria-label="follow me on facebook"
          >
            <FontAwesomeIcon icon={faFacebook} alt="facebook" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to="https://www.instagram.com/littlelearnerspreschool2022/"
            target="_blank"
            alt="Instagram"
            aria-label="follow me on instagram"
          >
            <FontAwesomeIcon icon={faSquareInstagram} alt="Instagram Link" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
