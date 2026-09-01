import HeroImage from "../../components/heroImage";
import events from "../../assets/images/events.jpg";
import salute from "../../assets/images/salute-40s.jpg";
import fan from "../../assets/images/bg_5.png";
import Featured from "../../components/featured";
import useScrollState from "../../components/scrollState";
import EventsGrid from "../../components/eventsGrid";

import "./index.scss";
import CTA from "../../components/cta";

const Events = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <div className="events-page">
        <FadeInSection>
          <HeroImage
            VidSrc={events}
            eyebrow="Performing live near you"
            h1="Live swing. unforgettable nights"
            p="We perform at a variety of venues and events across Kent and the south-east.
            Come and experience the timeless sound of a full big band, live."
            button1Text="About the band"
            button1Link="/about-us"
            button2Link="/book-us"
            button2Text="book the band"
            background="var(--navy)"
            color="var(--ivory)"
          />
        </FadeInSection>

        <Featured id="upcoming-events"
          src={salute}
          eyebrow="FEATURED APPEARANCE"
          featureTitle="SALUTE TO THE '40S"
          featureP="We are proud perform annually at the Historic Dockyard. It's the highlight of our calendar and a much-loved tradition."
          featurebtn="Find out more"
          link="/events"
        />
        <FadeInSection>
          <section className="second-section">
            <div className="about__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
            <div className="second__inner">
              <EventsGrid />
            </div>
          </section>
        </FadeInSection>
        <CTA />
      </div>
    </>
  );
};

export default Events;
