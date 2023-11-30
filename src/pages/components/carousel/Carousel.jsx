import "./carousel.css";
import { CarouselSelectorImages } from "./CarouselSelectorImages";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
/**
 *
 * @param {Object} props
 * @param {[Object]} IMG - Array of object describe images
 * @returns {React.node}
 */
export function Carousel({ IMG = IMAGES }) {
  /**
   * @type {[MainImageState, React.Dispatch<React.SetStateAction<MainImageState>]}
   */
  const [mainImage, setMainImage] = useState({});
  const [visible, setVisible] = useState(true);
  /**
   *
   * @param {[Object]} data
   */
  const getDatafromchild = (data) => {
    setMainImage(data);
    setVisible(false);
  };
  return (
    <>
      <div className="container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="container-carousel-image">
            <motion.img
              key={mainImage.srcImage}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={mainImage.srcImage}
              alt={mainImage.srcTitle}
            />
            {visible && <img src={IMG[0].source} alt={mainImage.srcTitle} />}
          </motion.div>
        </AnimatePresence>
        <CarouselSelectorImages
          IMAGES={IMG}
          visibleImage="2"
          getDatafromchild={getDatafromchild}></CarouselSelectorImages>
      </div>
    </>
  );
}
