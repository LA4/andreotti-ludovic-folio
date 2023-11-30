import { Paragraph } from "./Paragraph";
import { Skills } from "./skills.jsx";
import "./css/cv.css";
import pp from "./../../assets/img/profil_picture.jpg";
import {
  assistantAnipateur,
  assistantCommercial,
  GraphisteFreelance,
} from "./../components/ProfessionalExperience/expérienceList";
import { ProfessionalExperience } from "../components/ProfessionalExperience/ProfessionalExperience.jsx";
export function Cv() {
  const TAGSSKILLS = [
    {
      title: "HTML / CSS / JS",
    },
    { title: "REACT js" },
    { title: "Vue js 2" },
    { title: "Php (via Sympony)" },
    { title: "SQL" },
  ];
  const TAGSSOFTSKILLS = [
    { title: "Intégerer une maquette" },
    { title: "Aptitude à se former de manière autonome" },
    { title: "Concevoir et développer un Site static" },
    { title: "Flexibilité et adaptabilité" },
    { title: "Autonomie" },
    { title: "Curiosité" },
  ];
  return (
    <>
      <div className="container-cv">
        <main className="main-cv">
          <div className="header-cv">
            <h1>Andreotti</h1>
            <h3>Ludovic</h3>
            <h2>Développeur web</h2>
            <div className="container-img-cv">
              <img src={pp} alt="" />
            </div>
          </div>
          <Paragraph>
            Professionnel polyvalent, mon parcours diversifié m'a permis de
            développer des compétences précieuses qui vont au-delà des aspects
            techniques du développement web . . .
          </Paragraph>
          <div className="skills-container">
            <Skills tags={TAGSSKILLS}>Skills</Skills>
            <Skills tags={TAGSSOFTSKILLS}>Soft skills</Skills>
          </div>
          <div className="container-experiences">
            <span className="experiences-title">Mes éxpériences passées :</span>
            <ProfessionalExperience arrayOf={GraphisteFreelance}>
              Graphiste Freelance
            </ProfessionalExperience>
            <ProfessionalExperience arrayOf={assistantCommercial}>
              Assistant administratif et commercial
            </ProfessionalExperience>
            <ProfessionalExperience arrayOf={assistantAnipateur}>
              Assistant Animateur
            </ProfessionalExperience>
          </div>
        </main>
      </div>
    </>
  );
}
