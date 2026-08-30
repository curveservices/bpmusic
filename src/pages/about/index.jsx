import { Suspense } from "react";
import about from "../../assets/images/about_video.mp4";
import pbb from "../../assets/images/about_PBB.jpg";
import fan from "../../assets/images/bg_5.png";
import Button from "../../components/button";
import useScrollState from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";
import LazyVideo from "../../components/LazyVideo";
import Textbox from "../../components/textBox";
import CTA from "../../components/cta";
import "./index.scss";


const About = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <div className="about-page">
        <FadeInSection>
          <section className="hero">
            {/* Video background */}
            <Suspense fallback={<LoadingSpinner />}>
              <div className="hero__video">
                <LazyVideo
                  alt="Pensinsular Big Band in Kent"
                  src={about}
                  type="video/mp4"
                  className="video"
                />
              </div>
            </Suspense>
            <div className="hero__video-overlay" />
            {/* Art Deco fan */}
            <div className="hero__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
            <div className="hero__content">
              <div className="hero__inner">
                <span className="eyebrow">
                  KEEPING THE GOLDEN AGE OF SWING ALIVE
                </span>
                <h1>The Peninsular Big Band</h1>

                <div className="divider">
                  <span />
                </div>

                <p>
                  The Peinnsula Big Band is a 18-piece ensemble dedicated to the
                  timeless music of the swing era. From the iconic sounds of
                  Count Basie and Duke Ellington to the classic arrangements of
                  Glenn Miller, we bring energy, elegance and excitement to
                  every stage.
                </p>

                <div className="btn-container">
                  <Button text="Upcomming events" link="/events" />

                  <Button
                    text="Book the band"
                    link="/contact"
                    background="var(--navy-light)"
                    color="var(--ivory)"
                  />
                </div>
              </div>
            </div>
            {/* Bottom scroll indicator */}
            <a href="#the-band" className="scroll" aria-label="Scroll to about">
              <span className="scroll-line" />
              <span>Scroll</span>
            </a>
          </section>
          <CTA />
        </FadeInSection>
        <FadeInSection>
          <section className="second__section">
            <div className="about__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
            <div
              className="second__inner"
              id="the-band"
              style={{ paddingTop: "4rem" }}
            >
              <div className="heading">
                <div className="h2-title">
                  <span className="divider" />
                  <h2>The Big Band</h2>
                  <span className="divider" />
                </div>
              </div>
              <Textbox
                src={pbb}
                eyebrow="The Sound of Swing. The Spirit of Live Music."
                h1="Our Story"
                p="Since 2007, the Peninsula Big Band has been bringing the timeless energy of the big band era to audiences across Kent and beyond."

                p1="From Glenn Miller and Count Basie to The Beatles, Sade and Michael Jackson, our 15-piece orchestra blends classic swing with modern favourites — creating unforgettable live music for festivals, dinner dances, fundraisers and special events."

                p2="Ready to experience the band?"
                buttonText="Book the band"
                link="/book-us"
                reverse="true"
              />
            </div>
          </section>
          <section className="third__section">
            <div className="heading">
              <div className="h2-title">
                <span className="divider" />
                <h2>Mainly Sax</h2>
                <span className="divider" />
              </div>
            </div>
            <div className="sax__section" id="mainly-sax">
              <div className="text-box">
                <span className="eyebrow">
                  A HIGH-ENERGY SAXOPHONE ENSEMBLE
                </span>
                <h1 className="main">An Elegant off-shoot</h1>
                <div className="divider">
                  <span />
                </div>
                <p>
                  Mainly Sax is the dynamic little brother of The Peninsula Big
                  Band.
                </p>
                <p>
                  Featuring four saxophonists and a tight rhythm section, this
                  ensemble delivers a fresh, modern take on jazz favourites,
                  funk, Latin and contemporary tunes.
                </p>
                <p>
                  Perfect for smaller venues, cocktail parties and corporate
                  events.
                </p>
                <div className="btn-container">
                  <Button text="BOOK MAINLY SAX" link="book-us" />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </>
  );
};

export default About;
