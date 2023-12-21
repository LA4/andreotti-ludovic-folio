import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export function SkillCV({ name, children }) {
  const [visible, setVisible] = useState(false);

  const actif = {
    backgroundColor: visible ? "var(--second)" : "",
    color: visible ? "var(--black)" : "",
    height: "100%",
    width: "auto",
  };
  return (
    <>
      <div
        onClick={() => setVisible(!visible)}
        className="container-skill-soft-cv">
        <span
          onClick={(e) => {
            setVisible(!visible);
          }}
          className="skill-title-cv"
          style={actif}>
          {name}
          <span className="animate-skill-title-cv"></span>
        </span>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}>
            {visible && (
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="container-list-cv">
                {children}
              </motion.ul>
            )}
          </motion.div>
        </AnimatePresence>
        <span className="border-cv"></span>
      </div>
    </>
  );
}
