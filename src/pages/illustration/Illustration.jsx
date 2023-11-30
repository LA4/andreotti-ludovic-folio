import "./illustration.css";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGESI } from "../../imageAPI/images";
import { useState } from "react";
import { Arrow } from "./../components/carousel/Arrow";
export function Illustration() {
  const [actualPicture, setActualPicture] = useState(0);
  const [nextPicture, setNextPicture] = useState(1);
  const [visible, setVisible] = useState(false);
  const nextImg = () => {
    if (actualPicture >= IMAGESI.length - 1) {
      setActualPicture(0);
    } else {
      setActualPicture(actualPicture + 1);
    }
    if (nextPicture >= IMAGESI.length - 1) {
      setNextPicture(0);
    } else {
      setNextPicture(nextPicture + 1);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="container-illustration">
          <div className="container-img-description">
            <div className="title-illustration">
              {IMAGESI[actualPicture].title}
            </div>
            <motion.aside
              key={IMAGESI[nextPicture].description}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="aside-description">
              {IMAGESI[actualPicture].description}
            </motion.aside>
            <div onClick={nextImg} className="container-img">
              <motion.img
                key={IMAGESI[nextPicture].source}
                src={IMAGESI[nextPicture].source}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.4 }}
                exit={{ x: -100, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="img-back"
                alt=""
              />
              <AnimatePresence>
                <motion.img
                  whileHover={{
                    scale: 1.02,
                    x: -15,
                  }}
                  onHoverStart={(e) => {
                    setVisible(true);
                  }}
                  onHoverEnd={(e) => {
                    setVisible(false);
                  }}
                  key={IMAGESI[actualPicture].source}
                  src={IMAGESI[actualPicture].source}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -150, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="img-front"
                  alt={IMAGESI[actualPicture].title}
                />
                {visible && (
                  <motion.span
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{
                      position: "absolute",
                      right: "20%",
                      display: "flex",
                      width: "50px",
                    }}>
                    <Arrow right></Arrow>
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
