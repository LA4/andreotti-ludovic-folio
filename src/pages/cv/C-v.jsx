import "./cv.css";
import profil_picture from "./../../assets/img/profil_picture.jpg";
import profil_picture_face from "./../../assets/img/profil_picture_face.jpg";
import { Tag } from "./../components/Tag.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Paragraph } from "../components/Paragraph.jsx";
import { useEffect, useState } from "react";

export function Cv() {
  const [img, setImg] = useState(true);
  const timerFunction = () => {
    setTimeout(() => {
      setImg(!img);
    }, 2000);
  };
  useEffect(timerFunction, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container"
      >
        <main className="container-cv">
          <div className="encart-name">
            <div>
              <h1>andreotti</h1>
              <h3>ludovic</h3>
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              developpeur Web - REACT js
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: -50, y: 50 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="profil-picture-cv"
            >
              {img ? (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={profil_picture_face}
                  alt=""
                />
              ) : (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={profil_picture}
                  alt=""
                />
              )}
            </motion.span>
          </div>
          <AnimatePresence>
            <Paragraph></Paragraph>
          </AnimatePresence>
          <AnimatePresence>
            <div className="container-skills">
              <div className="container-tags">
                <Tag fontSize="1.2rem" padding="1rem">
                  Exprériences personnelles
                </Tag>
                <p>Résumé :</p>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
              </div>
              <div className="container-tags">
                <Tag fontSize="1.2rem" padding="1rem">
                  Compétences et savoir faire
                </Tag>
                <p>Résumé :</p>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
                <Tag bgColor="var(--second06)">
                  Concevoir une application Web
                </Tag>
              </div>
            </div>
          </AnimatePresence>
        </main>
      </motion.div>
    </>
  );
}
