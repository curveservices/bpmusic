import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import quarter from "../../assets/images/quarter.png";
import { Link } from "react-router-dom";

import fan from "../../assets/images/bg_5.png";

import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
          <img src={quarter} alt="" className="top-left quarter" />
                <img src={quarter} alt="" className="top-right quarter" />
                <img src={quarter} alt="" className="btm-left quarter" />
                <img src={quarter} alt="" className="btm-right quarter" />

      <div className="footer__inner">
        {/* ========================================
            BRAND
        ======================================== */}

        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-line" />

            <div>
              <span className="footer__logo-small">THE</span>

              <h2>
                Peninsula
                <br />
                Big Band
              </h2>
            </div>

            <span className="footer__logo-line" />
          </div>

          <p>Bringing the golden age of swing to every performance.</p>
        </div>

        {/* ========================================
            NAVIGATION
        ======================================== */}

        <div className="footer__column">
          <h3>Explore</h3>

          <nav className="footer__nav">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/events">Events</Link>

            <Link to="/gallery">Gallery</Link>

            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* ========================================
            CONTACT
        ======================================== */}

        <div className="footer__column">
          <h3>Get In Touch</h3>

          <div className="footer__contact">
            <p>Kent, United Kingdom</p>

            <a href="tel:+447702056378">07702 056378</a>

            <a href="mailto:bprankard@me.com">bprankard@me.com</a>
          </div>
        </div>

        {/* ========================================
            SOCIALS
        ======================================== */}

        <div className="footer__column">
          <h3>Follow Us</h3>

          <div className="footer__socials">
            <a
              href="YOUR_FACEBOOK_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peninsula Big Band on Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="YOUR_YOUTUBE_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peninsula Big Band on YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <p className="footer__social-text">
            Follow us for upcoming performances, photos and news.
          </p>
        </div>
      </div>

      {/* ========================================
          BOTTOM BAR
      ======================================== */}

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} <a href="https://immutable-studio.co.uk" target="_blank" rel="noopener noreferrer">Immutable Studio</a>. All rights
            reserved.
          </p>

          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>

            <span>◆</span>

            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
