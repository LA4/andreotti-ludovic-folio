import "./graphism.css";
import { Carousel } from "./../components/carousel/Carousel.jsx";
import { IMAGES } from "./../illustration/imageAPI/images";
import { Tag } from "./../components/Tag.jsx";
import { useState } from "react";
export function Graphisme() {
  const [isVisible, setIsVisible] = useState(false);
  const setVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <main className="graphism-container">
        {!isVisible && (
          <div className="graphism-descr">
            <span>Graphiste freelance</span>
            <p>
              depuis 2019, j'ai pu mettre ma vison de l'art au service de
              plusieurs entreprises. CE qui m'a permis d'evoluer et d"couvrir
              différents mondes professionneles et associatifs.
            </p>
            <Tag>
              <span onClick={setVisible}>voir mes créations</span>
            </Tag>
          </div>
        )}
        {isVisible && <Carousel IMG={IMAGES}></Carousel>}
      </main>
    </>
  );
}
