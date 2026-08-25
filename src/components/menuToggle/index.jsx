import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
const MenuToggle = ({ showNav, setShowNav }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={showNav ? "close" : "bars"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onClick={() => setShowNav(!showNav)}
        className="menu-icon"
      >
        <FontAwesomeIcon
          icon={showNav ? faTimes : faBars}
          color="var(--gold)"
        />
      </motion.button>
    </AnimatePresence>
  );
};

export default MenuToggle;
