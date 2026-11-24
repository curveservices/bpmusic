import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import fan from "../../assets/images/bg_5.webp";
import Button from "../../components/button";
import useScrollState from "../../components/scrollState";
import Helmet from "../../components/helmet";
import emailjs from "@emailjs/browser";

import "./index.scss";
const FadeInSection = ({ children }) => {
  useScrollState();
  return <div className={`fade-in-on-scroll`}>{children}</div>;
};
const Contact = () => {
  const [searchParams] = useSearchParams();

  const bandFromUrl = searchParams.get("band");

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (bandFromUrl === "mainly-sax") {
      setSubject("Booking enquiry - Mainly Sax");
    } else if (bandFromUrl === "peninsula-big-band") {
      setSubject("Booking enquiry - Peninsula Big Band");
    } else if (bandFromUrl === "classical-quartet") {
      setSubject("Booking enquiry - Classical Quartet");
    }
  }, [bandFromUrl]);

  const handleBooking = (band) => {
    setSubject(`Booking enquiry - ${band}`);

    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
const sendEmail = async (e) => {
  e.preventDefault();

  setSending(true);
  setError("");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        band: subject.replace("Booking enquiry - ", ""),
        subject,
        user_name: name,
        user_email: email,
        phone,
        event_date: eventDate,
        event_type: eventType,
        message,
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      },
    );
    // Clear the form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setEventDate("");
    setEventType("");
    setMessage("");

    // Show thank-you popup
    setShowThankYou(true);

    setSubmitted(true);
  } catch (error) {
    console.error("Email sending failed:", error);
    setError("Sorry, your message couldn't be sent. Please try again.");
  } finally {
    setSending(false);
  }
};
  return (
    <>
      <Helmet
        title="Contact Us | Peninsula Big Band"
        description="Get in touch with the Peninsula Big Band for booking enquiries and more information."
        keywords="contact, booking, Peninsula Big Band, big band, swing, Kent, south east, music"
        link="https://www.pbmusic.org.uk/contact-us"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Peninsula Big Band",
          description:
            "The Peninsula Big Band is a 15-18 piece traditional swing orchestra based in Kent, performing timeless classics from the great dance bands alongside modern favourites.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kent",
            addressRegion: "South East England",
            addressCountry: "United Kingdom",
          },
          telephone: "+44 7702 056378",
          email: "bprankard@me.com",
          url: "https://www.pbmusic.org.uk/contact-us",
        }}
      />
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
              {/* Classical Quintet */}
              <article className="booking__card booking__card--featured booking__quintet">
                <span className="eyebrow">Classical quartet</span>

                <h3>Il Quartetto Fienile</h3>

                <div className="booking__divider">
                  <span />
                  <i>◇</i>
                  <span />
                </div>

                <button
                  type="button"
                  className="booking__button"
                  onClick={() => handleBooking("Classical Quartet")}
                >
                  Book The quartet
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
                  Give us a few details about your event and we'll be in touch
                  to discuss availability, requirements and booking
                  arrangements.
                </p>
              </div>

              <form className="booking-form" onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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

                      <option value="Booking enquiry - Classical Quartet">
                        Book Classical Quartet
                      </option>

                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="event-date">Event Date</label>

                    <input
                      id="event-date"
                      type="date"
                      name="eventDate"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="event-type">Event Type</label>

                    <input
                      id="event-type"
                      type="text"
                      name="eventType"
                      placeholder="Festival, concert, charity event..."
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="booking-form__submit">
                  <input className="flat-btn" type="submit" value="Submit" />
                </div>
                {error && <div className="booking-form__error">{error}</div>}
              </form>
            </div>
          </section>
        </FadeInSection>

        {/* ==================================================
          DIRECT CONTACT
        ================================================== */}

        <FadeInSection>
          <section className="contact-details">
            <img src={fan} alt="" className="fan" />
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
                  <strong>bprankard@me.com</strong>
                </div>
              </a>

              <a href="tel:07702056378">
                <FontAwesomeIcon icon={faPhone} />

                <div>
                  <span>Telephone Bev</span>
                  <strong>07702 056378</strong>
                </div>
              </a>
            </div>
          </section>
        </FadeInSection>
        {showThankYou && (
          <div className="thank-you-overlay">
            <div
              className="thank-you-popup"
              role="dialog"
              aria-modal="true"
              aria-labelledby="thank-you-title"
            >
              <button
                className="thank-you-popup__close"
                type="button"
                onClick={() => setShowThankYou(false)}
                aria-label="Close thank you message"
              >
                &times;
              </button>

              <span className="eyebrow">Enquiry received</span>

              <div className="thank-you-popup__divider">
                <span />
                <i>◇</i>
                <span />
              </div>

              <h2 id="thank-you-title">Thank You!</h2>

              <p>
                Your enquiry has been successfully sent. We appreciate you
                getting in touch and will be back in contact as soon as
                possible.
              </p>

              <button
                className="thank-you-popup__button"
                type="button"
                onClick={() => setShowThankYou(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
