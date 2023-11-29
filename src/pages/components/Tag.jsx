import "./components.css";
import { motion } from "framer-motion";
/**
 *@type {React.JSX.Element}
 * @param {String} props
 * @param {String} lineHeigth
 * @param {String} fontSize
 * @param {String} padding
 * @param {String} width
 * @param {String} height
 * @param {String} href
 * @param {String} target
 * @param {String} id
 * @param {String} bgColor
 * @returns
 */
export function Tag({
  children,
  lineHeight,
  fontSize,
  padding,
  width,
  height,
  href = "#",
  target = "",
  id,
  bgColor,
  props,
}) {
  const tagStyle = {
    lineHeight: lineHeight,
    fontSize: fontSize,
    padding: padding,
    width: width,
    height: height,
    backgroundColor: bgColor,
  };
  return (
    <>
      <a
        style={{ display: "flex", justifyContent: "center" }}
        href={href}
        target={target}
      >
        <motion.button
          initial={{ opacity: 0, x: -width }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          style={tagStyle}
          className="tag-container"
          id={id}
        >
          {children}
        </motion.button>
      </a>
    </>
  );
}
