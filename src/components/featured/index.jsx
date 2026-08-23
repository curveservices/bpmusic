import Button from "../button";
import quarter from "../../assets/images/quarter.png";
import "./index.scss";

const Featured = (props) => {
  const { src, featureTitle, eyebrow, featureP, featurebtn } = props;
  return (
    <div className="featured-container">
      <img src={quarter} alt="" className="top-left quarter" />
      <img src={quarter} alt="" className="top-right quarter" />
      <img src={quarter} alt="" className="btm-left quarter" />
      <img src={quarter} alt="" className="btm-right quarter" />

      <div className="img-text-box">
        <img
          className="feature-img"
          src={src}
          alt={`Penisular Big Bad, ${featureTitle} in Kent`}
        />
        <div className="feature-text-box">
          <span className="eyebrow">{eyebrow}</span>
          <h3 className="feature-title">{featureTitle}</h3>
          <p>{featureP}</p>
          <Button text={featurebtn} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
