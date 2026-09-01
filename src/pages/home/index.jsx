import { Suspense } from "react";
import home from "../../assets/images/hero.mp4";
import sax from "../../assets/images/sax.jpg";
import about from "../../assets/images/about.webp";
import rep from "../../assets/images/g4.jpg";
import modern from "../../assets/images/rep1.jpg";
import fan from "../../assets/images/bg_5.png";
import LazyVideo from "../../components/LazyVideo";
import useScrollState from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";
import Button from "../../components/button";
import Metrics from "../../components/metrics";
import salute from "../../assets/images/salute-40s.jpg";
import Textbox from "../../components/textBox";
import AboutCards from "../../components/cards/aboutCards";
import Featured from "../../components/featured";
import EventCards from "../../components/cards/eventCards";
import Repertoire from "../../components/repertoire";
import GalleryPreview from "../../components/galleryPreview";
import CTA from "../../components/cta";

import "./index.scss";
import HeroVideo from "../../components/heroVideo";

const Home = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <div className="home-page">
        <FadeInSection>
          <HeroVideo
            VidSrc={home}
            eyebrow="The Peninsula Big Band"
            h1="Experience the Golden Age of Swing"
            p="The Peninsula Big Band is a 15-18 piece traditional swing
              orchestra based in Kent, performing timeless classics from the
              great dance bands alongside modern favourites."
            button1Text="Upcoming events"
            button1Link="/events/#upcoming-events"
            button2Text="Book the Band"
            button2Link="/book-us"
            background="var(--navy)"
            color="var(--ivory)"
            href="#about"
          />
        </FadeInSection>

        <section className="metrics">
          <Metrics />
        </section>
        <section className="second-section" id="about">
          <FadeInSection>
            <div className="about__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
          </FadeInSection>

          <div className="second-inner">
            <FadeInSection>
              <Textbox
                src={about}
                eyebrow="about Peninsular Big Band"
                h1="A tradition of swing since 2007"
                p="Formed in Kent, The Peninsula Big Band brings together professional and experienced amateur musicians who share a passion for the timeless sound of the big band era.
                        For over 15 years we have been delighting audiences across the South East with authentic swing classics and modern favourites."
                buttonText="learn more about us"
                link="/about-us"
              />
            </FadeInSection>
            <FadeInSection>
              <Textbox
                src={sax}
                eyebrow="Mainly Sax"
                h1="Another sound from the Big Band"
                p="Meet Mainly Sax — a smaller ensemble bringing the distinctive sound of live saxophones to bandstands, community events and venues across the South East."
                buttonText="Discover Mainly Sax"
                link="/about-us/#mainly-sax"
                reverse={true}
              />
            </FadeInSection>
          </div>
          <div className="section" id="where">
            <FadeInSection>
              <AboutCards mainTitle="Where We Perform" />
            </FadeInSection>
          </div>
          <FadeInSection>
            <Featured
              src={salute}
              eyebrow="FEATURED APPEARANCE"
              featureTitle="SALUTE TO THE '40S"
              featureP="We are proud to perform annually at the Historic Dockyard. It's a highlight of our calendar and a much-loved tradition."
              featurebtn="Find out more"
              link="/events"
            />
          </FadeInSection>
        </section>
        <FadeInSection>
          <section className="third-section">
            <div className="third__inner">
              <EventCards />
              <Repertoire />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="fourth-section">
            <GalleryPreview />
          </section>
        </FadeInSection>
        <CTA />
      </div>
    </>
  );
};

export default Home;
