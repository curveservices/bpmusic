import HeroImage from "../../components/heroImage";
import events from "../../assets/images/events.jpg";
import salute from "../../assets/images/salute-40s.jpg";
import fan from "../../assets/images/bg_5.png";
import Featured from "../../components/featured";
import useScrollState from "../../components/scrollState";
import EventsGrid from "../../components/eventsGrid";

import "./index.scss";
import CTA from "../../components/cta";
import Helmet from "../../components/helmet";

const Events = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <Helmet
        title="Events | Peninsula Big Band in Kent"
        description="Check out our upcoming events and performances across Kent and the south-east."
        keywords="events, performances, Peninsula Big Band, big band, swing, Kent, south east, music"
        link="https://www.pbmusic.org.uk/events"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Peninsula Big Band Events",
          description:
            "Check out our upcoming events and performances across Kent and the south-east.",
          url: "https://www.pbmusic.org.uk/events",
        }}
      />
      <div className="events-page">
        <FadeInSection>
          <HeroImage
            VidSrc={events}
            eyebrow="Performing live near you"
            h1="Step Into the Golden Age of Swing"
            p="We perform at a variety of venues and events across Kent and the south-east.
            Come and experience the timeless sound of a full big band, live."
            button1Text="About the band"
            button1Link="/about-us"
            button2Link="/contact-us?band=peninsula-big-band"
            button2Text="book the band"
            background="var(--navy)"
            color="var(--ivory)"
            href="#upcoming-events"
          />
        </FadeInSection>

        <Featured
          src={salute}
          eyebrow="FEATURED APPEARANCE"
          featureTitle="SALUTE TO THE '40S"
          featureP="We are proud perform annually at the Historic Dockyard. It's the highlight of our calendar and a much-loved tradition."
          featurebtn="Find out more"
          event="#upcoming-events"
        />
        <FadeInSection>
          <section className="second-section">
            <div className="about__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
            <div className="second__inner" id="upcoming-events">
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
