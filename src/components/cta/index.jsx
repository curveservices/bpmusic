import Button from "../button";
import fan from "../../assets/images/bg_5.png";
import "./index.scss";

const CTA = () => {
  return (
    <div className="cta">
      <img src={fan} alt="" className="cta__fan" aria-hidden="true" />

      <div className="cta__content">
        <span className="cta__eyebrow">Make It A Night To Remember</span>

        <h2>
          Looking for unforgettable
          <span> live entertainment?</span>
        </h2>

        <p>Book The Peninsula Big Band for your next event.</p>
      </div>
      <div className="cta__btn-container">
        <Button
          text="Book The Band Now"
          link="/contact-us"
          background="var(--navy)"
          color="var(--ivory)"
          padding={1.4}
        />
      </div>
    </div>
  );
};

export default CTA;
