import { useState } from "react";
import "./css/paragraph.css";
import { AnimatePresence, motion } from "framer-motion";
const TEXT = ` Professionnel polyvalent, mon parcours diversifié m'a permis de développer des
compétences précieuses qui vont au-delà des aspects techniques du
développement web. En tant que graphiste freelance, j'ai acquis une
sensibilité créative et une attention aux détails qui enrichissent mes
projets. Mon expérience en tant qu'assistant commercial m'a appris à
communiquer efficacement, à gérer des relations, notamment avec les équipes
sur le terrain et les clients. En ce qui concerne l'intégration web, je
maîtrise des technologies telles que le HTML, CSS, JavaScript (ainsi que
React), PHP (via Symfony), ce qui me permet de créer des sites web simples et
efficaces. La curiosité et la persévérance me permettent de me surpasser
lorsque je suis confronté à un problème. Je suis convaincu que mon bagage
professionnel unique et mes compétences techniques me permettent d'apporter un
regard différent aux équipes que je côtoie.
`;
export function Paragraph({ children, props }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AnimatePresence>
        <motion.article
          key={visible}
          initial={{ opacity: 1, scaleY: 0.8 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originY: -1 }}
          onClick={() => {
            setVisible(!visible);
          }}
          className="container-paragraph">
          {visible ? TEXT : children}
        </motion.article>
      </AnimatePresence>
    </>
  );
}
