import "./cvStyle.css";
import pp from "./../../assets/img/profil_picture.jpg";
import { SkillCV } from "./skillCv";
export function Cv() {
  const stylePp = {
    backgroundImage: `url(${pp})`,
  };
  return (
    <>
      <div className="container-cv">
        <div className="header-cv">
          <div className="container-name-cv">
            <span style={stylePp} className="pp-cv"></span>
            <h1 className="firstname-cv">Andreotti </h1>
            <h2 className="lastname-cv">Ludovic</h2>
            <p>Développeur Web - Junior</p>
          </div>
          <div className="container-under-cv">
            <p>06 42 53 39 59</p>
            <p>andr.ludo@gmail.com</p>
          </div>
          <div className="container-under-cv-2">
            <p>Marseille</p>
            <p>Baccaloreat technologique (sTI)</p>
          </div>

          <div className="skill-cv">
            <SkillCV name="SOFT SKILL">
              <li>aptitude à se former de maniere autonome</li>
              <li>concevoir et développer un site static</li>
              <li>fléxibilité et adaptabilité</li>
              <li>intégrer une maquette</li>
              <li>autonome</li>
              <li>curiosité</li>
            </SkillCV>
            <SkillCV name="SKILL">
              <li>HTML CSS JAVASCRIPT</li>
              <li>Vue js - version 2</li>
              <li>React js - version 18</li>
              <li>Symfony - version 6</li>
            </SkillCV>
          </div>
          <div className="exp-pro-cv">
            <span className="exp-pro-title">Expériences Proffessionnelles</span>
            <SkillCV name="GRAPHISME FREELANCE">
              <li>
                Entretien avec le client afin d'élaborer le cahier des charges
              </li>
              <li>Recherche et création</li>
              <li>Dialogue et explication</li>
              <li>Livraison du produit</li>
            </SkillCV>
            <SkillCV name="ASSISTANT ADMINISTRATIF ET COMMERCIAL">
              <li>Premier contact avec le prospect</li>
              <li>Prise de rendez-vous avec le contact</li>
              <li>Gestion du planing du commercial</li>
              <li>Confection des devis</li>
              <li>Gestion des bons de commandes</li>
              <li>
                Coordonner et planifier les livraisons avec le poseur et l'usine
              </li>
              <li>Déclaration de travaux avec les clients</li>
              <li>Donner les renderz-vous aux clients pour la livraison</li>
              <li>Faire les satisfactions clients</li>
              <li>Gérer les services après vente</li>
              <li>Vente et conseils d'accessoire et produits</li>
              <li>Gestion des stocks et commandes</li>
            </SkillCV>
            <SkillCV name="ASSISTANT ANIMATEUR">
              <li>Elaborer les supports d'apprentissage</li>
              <li>Acceuillir les élèves</li>
              <li>Dispenser un cours de musique</li>
              <li>Accompagner dans l'apprentissage</li>
            </SkillCV>
          </div>
          <div className="exp-pro-cv">
            <SkillCV name="à savoir">
              <p>
                Professionnel polyvalent, mon parcours diversifié m'a permis de
                développer des compétences précieuses qui vont au-delà des
                aspects techniques du développement web. En tant que graphiste
                freelance, j'ai acquis une sensibilité créative et une attention
                aux détails qui enrichissent mes projets. Mon expérience en tant
                qu'assistant commercial m'a appris à communiquer efficacement, à
                gérer des relations, notamment avec les équipes sur le terrain
                et les clients. En ce qui concerne l'intégration web, je
                maîtrise des technologies telles que le HTML, CSS, JavaScript
                (ainsi que React), PHP (via Symfony), ce qui me permet de créer
                des sites web simples et efficaces. La curiosité et la
                persévérance me permettent de me surpasser lorsque je suis
                confronté à un problème. Je suis convaincu que mon bagage
                professionnel unique et mes compétences techniques me permettent
                d'apporter un regard différent aux équipes que je côtoie.
              </p>
            </SkillCV>
          </div>
        </div>
      </div>
    </>
  );
}
