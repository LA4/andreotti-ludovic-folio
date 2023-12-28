import { Tag } from "./../components/Tag";
import bgHome from "../../assets/img/bg-home.jpg";
import "./home.css";
import { motion } from "framer-motion";

export function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          paddingBottom: "50px",
        }}>
        <motion.div
          initial={{ opacity: 0, scale: 2.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container-home">
          <h1 className="home-title">Andreotti Ludovic</h1>
          <p>Décrouvrez mon univers à travers ce site internet </p>
        </motion.div>
        <span className="contact-tags">
          <Tag href="https://github.com/LA4" target="_blank" width="80px">
            GitHub
          </Tag>
          <Tag
            href="https://www.linkedin.com/in/andreotti-ludovic-090011197"
            target="_blank"
            width="80px">
            Linkedin
          </Tag>
          <Tag
            href="https://www.instagram.com/ludoandr4rt"
            target="_blank"
            width="100px">
            Instagram
          </Tag>
          <Tag
            href="https://ludraw.artstation.com/"
            target="_blank"
            width="120px">
            Art Station
          </Tag>
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            margin: "1rem",
          }}>
          <h3>Création(s) web :</h3>
          <span>
            <a
              style={{
                backgroundColor: "rgba(0,0,0,.8)",
                padding: ".5rem",
              }}
              target="_blank"
              href="http://threadbook.andreotti-ludovic.fr/">
              ThreadBook
            </a>
          </span>
        </div>
      </div>
      <img className="background" src={bgHome} alt="" />
    </>
  );
}
