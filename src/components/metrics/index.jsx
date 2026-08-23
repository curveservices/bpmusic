import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import quarter from "../../assets/images/quarter.png";
import {
  faCalendar,
  faLocationPin,
  faMusic,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "../countUp";
import "./index.scss";

const MetricsData = [
  {
    value: 2007,
    suffix: "",
    label: "Established",
    icon: faCalendar,
  },
  {
    value: 18,
    suffix: "+",
    label: "Musicians",
    icon: faUsers,
  },
  {
    value: 500,
    suffix: "+",
    label: "Performances",
    icon: faMusic,
  },
  {
    value: 2,
    suffix: "+",
    label: "Kent & south east",
    icon: faLocationPin,
  },
];

const Metrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="metrics-container" ref={ref}>
      <img src={quarter} alt="" className="top-left quarter" />
      <img src={quarter} alt="" className="top-right quarter" />
      <img src={quarter} alt="" className="btm-left quarter" />
      <img src={quarter} alt="" className="btm-right quarter" />
      {MetricsData.map((metric) => (
        <div className="metric" key={metric.label}>
          <FontAwesomeIcon icon={metric.icon} className="metric-icon" />

          <h1 className="metric-value">
            {inView && (
              <CountUp
                end={metric.value}
                duration={1500}
                suffix={metric.suffix}
              />
            )}
          </h1>

          <p className="metric-label">{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
