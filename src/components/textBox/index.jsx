import Button from "../button";
import frame from "../../assets/images/frame.png";
import "./index.scss";

const Textbox = ({
  src,
  eyebrow,
  h1,
  p,
  buttonText,
  link,
  display = true,
  reverse = false,
  flip = false,
  isInternal = true,
}) => {
  return (
    <>
      <div
        className={`textbox-container ${flip ? "flip" : ""} ${reverse ? "reverse" : ""}`}
      >
        <img src={frame} className="frame" aria-hidden="true" />
        <img
          className="blur-img"
          src={src}
          loading="lazy"
          alt="Penisular Big Band in Kent"
        />
        <div className="text-box">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="main">{h1}</h1>
          <div className="divider">
            <span />
          </div>
          <p className="">{p}</p>
          <div className="btn-container">
            <Button text={buttonText} link={link} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Textbox;
