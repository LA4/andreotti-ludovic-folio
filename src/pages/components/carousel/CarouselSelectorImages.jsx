import { useState } from "react";
import { Arrow } from "./Arrow";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @component
 * @typedef {Array<Object>} IMAGES
 * @param {IMAGES} IMAGES
 * @param {number} visibleImage
 * @param {function} getDataFromChild
 * @returns {React.node} Container selectable images
 */

export const CarouselSelectorImages = ({
  IMAGES,
  visibleImage = 3,
  getDatafromchild,
}) => {
  /** hook to know the current middle image
   * @type {[number,number]}
   */
  const [currentImage, setCurrentImage] = useState(0);
  /**
   * @type {number}
   */
  let precImage = currentImage == 0 ? IMAGES.length - 1 : currentImage - 1;
  /**
   * @type {number}
   */
  let nextImages = currentImage == IMAGES.length - 1 ? 0 : currentImage + 1;
  /**
   * @return {number}
   */
  const nextPage = () => {
    if (currentImage < IMAGES.length - 1) {
      setCurrentImage(currentImage + 1);
    } else setCurrentImage(0);
  };
  /**
   * @return {number}
   */
  const prevPage = () => {
    if (currentImage == 0) {
      setCurrentImage(IMAGES.length - 1);
    } else setCurrentImage(currentImage - 1);
  };
  if (visibleImage > 3) {
    return (
      <div className="error">
        If you want to change number of visible images, you must choose between
        1,2 or 3.
        <span>actual visibleImage :{visibleImage}</span>
      </div>
    );
  }
  /**
   *
   * @param {Event} e
   * @return {void}
   */
  const sendDataToParent = (e) => {
    let srcImage = e.target.src;
    let srcTitle = e.target.alt;
    getDatafromchild({ srcImage, srcTitle });
  };
  return (
    <>
      <div className="container-carousel-selector-image">
        <motion.span
          whileHover={{
            scale: 1.02,
            x: -15,
          }}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={prevPage}
          className="carousel-selector-image_arrow_left">
          <Arrow></Arrow>
        </motion.span>
        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="carousel-selector-image_ul">
          {visibleImage > 2 && (
            <li
              onClick={sendDataToParent}
              className="carousel-selector-image_li">
              <AnimatePresence>
                <motion.img
                  whileHover={{
                    scale: 1.02,
                    x: 15,
                  }}
                  key={IMAGES[precImage].source}
                  initial={{ opacity: 1, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="carousel-selector-image_img "
                  src={IMAGES[precImage].source}
                  alt={IMAGES[precImage].title}
                />
              </AnimatePresence>
            </li>
          )}
          <li onClick={sendDataToParent} className="carousel-selector-image_li">
            <motion.img
              whileHover={{
                scale: 1.02,
                x: 15,
              }}
              key={IMAGES[currentImage].source}
              initial={{ opacity: 0.5, x: -20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="carousel-selector-image_img "
              src={IMAGES[currentImage].source}
              alt={IMAGES[currentImage].title}
            />
          </li>
          {visibleImage > 1 && (
            <li
              onClick={sendDataToParent}
              className="carousel-selector-image_li">
              <motion.img
                whileHover={{
                  scale: 1.02,
                  x: 15,
                }}
                key={IMAGES[nextImages].source}
                initial={{ opacity: 0.5, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="carousel-selector-image_img "
                src={IMAGES[nextImages].source}
                alt={IMAGES[nextImages].title}
              />
            </li>
          )}
        </motion.ul>
        <motion.span
          whileHover={{
            scale: 1.02,
            x: 15,
          }}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={nextPage}
          className="carousel-selector-image_arrow_right">
          <Arrow right></Arrow>
        </motion.span>
      </div>
    </>
  );
};
