import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import fan from "../../assets/images/bg_5.png";

import Button from "../../components/button";

import "./index.scss";
import useScrollState from "../../components/scrollState";

const Contact = () => {
  const [searchParams] = useSearchParams();

  const bandFromUrl = searchParams.get("band");

  const [subject, setSubject] = useState("");

  useEffect(() => {
    if (bandFromUrl === "mainly-sax") {
      setSubject("Booking enquiry - Mainly Sax");
    } else if (bandFromUrl === "peninsula-big-band") {
      setSubject("Booking enquiry - Peninsula Big Band");
    }
  }, [bandFromUrl]);

  const handleBooking = (band) => {
    setSubject(`Booking enquiry - ${band}`);

    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
const FadeInSection = ({ children }) => {
  useScrollState();
  return <div className={`fade-in-on-scroll`}>{children}</div>;
};
  return (
    <div className="contact-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <FadeInSection>
        <section className="contact-hero">
          <div className="contact-hero__pattern" />

          <div className="contact-hero__content">
            <span className="eyebrow">GET IN TOUCH</span>

            <h1>Let's Make Some Music</h1>

            <div className="divider">
              <span />
            </div>

            <p>
              Whether you're planning a festival, concert, charity event or
              special celebration, we'd love to bring the sound of live swing
              music to your occasion.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* ==================================================
          BOOKING OPTIONS
      ================================================== */}

      <FadeInSection>
        <section className="booking">
             <div className="fan" aria-hidden="true">
                <img src={fan} alt="Peninsular big band" />
            </div>
          <div className="booking__heading">
            <div className="h2-title">
              <span className="divider" />
              <h2>BOOK THE BAND</h2>
              <span className="divider" />
            </div>

            <p>
              Choose the ensemble that's right for your event and send us your
              details. We'll get back to you as soon as possible.
            </p>
          </div>

          <div className="booking__cards">
            {/* Peninsula */}

            <article className="booking__card">

              <span className="eyebrow">THE FULL ENSEMBLE</span>

              <h3>Peninsula Big Band</h3>

              <div className="booking__divider">
                <span />
                <i>◇</i>
                <span />
              </div>

              <button
                type="button"
                className="booking__button"
                onClick={() => handleBooking("Peninsula Big Band")}
              >
                Book the Big Band
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </article>

            {/* Mainly Sax */}

            <article className="booking__card booking__card--featured">

              <span className="eyebrow">SMALLER ENSEMBLE</span>

              <h3>Mainly Sax</h3>

              <div className="booking__divider">
                <span />
                <i>◇</i>
                <span />
              </div>

              <button
                type="button"
                className="booking__button"
                onClick={() => handleBooking("Mainly Sax")}
              >
                Book Mainly Sax
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </article>
          </div>
        </section>
      </FadeInSection>

      {/* ==================================================
          BOOKING FORM
      ================================================== */}

      <FadeInSection>
        <section className="booking-form-section" id="booking-form">
          <div className="booking-form-section__pattern" />

          <div className="booking-form-section__inner">
            <div className="booking-form-section__heading">
              <span className="eyebrow">ENQUIRE ABOUT A BOOKING</span>

              <h2>Tell us about your event</h2>

              <div className="divider">
                <span />
              </div>

              <p>
                Give us a few details about your event and we'll be in touch to
                discuss availability, requirements and booking arrangements.
              </p>
            </div>

            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telephone</label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your telephone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Enquiry Type</label>

                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="">Select an option</option>

                    <option value="Booking enquiry - Peninsula Big Band">
                      Book Peninsula Big Band
                    </option>

                    <option value="Booking enquiry - Mainly Sax">
                      Book Mainly Sax
                    </option>

                    <option value="General enquiry">General enquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="event-date">Event Date</label>

                  <input id="event-date" type="date" name="eventDate" />
                </div>

                <div className="form-group">
                  <label htmlFor="event-type">Event Type</label>

                  <input
                    id="event-type"
                    type="text"
                    name="eventType"
                    placeholder="Festival, concert, charity event..."
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your event</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us a little about your event, venue, timings and anything else you think we should know..."
                />
              </div>

              <div className="booking-form__submit">
                <Button
                  text="Send Enquiry"
                  background="var(--gold)"
                  color="var(--navy)"
                />
              </div>
            </form>
          </div>
        </section>
      </FadeInSection>

      {/* ==================================================
          DIRECT CONTACT
      ================================================== */}

      <FadeInSection>
              <section className="contact-details">
                  <img src={fan} alt="" className="fan"/>
          <div className="h2-title">
            <span className="divider" />
            <h2>OR GET IN TOUCH</h2>
            <span className="divider" />
          </div>

          <div className="contact-details__items">
            <a href="mailto:info@bpmusic.org.uk">
              <FontAwesomeIcon icon={faEnvelope} />

              <div>
                <span>Email</span>
                <strong>info@bpmusic.org.uk</strong>
              </div>
            </a>

            <a href="tel:07702056378">
              <FontAwesomeIcon icon={faPhone} />

              <div>
                <span>Telephone</span>
                <strong>07702 056378</strong>
              </div>
            </a>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Contact;
