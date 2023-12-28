import { CloseButton } from "../../../icons/close.jsx";
import bgHome from "../../../assets/img/bg-home.jpg";
import cvpp from "../../../assets/img/profil_picture_face.jpg";
import hypolove from "/illustration/Hypolove.jpg";
import rugby from "/graphism/rugbycoupedumonde.jpg";

const Linkitem = ({ id, name, sendPageToParent, ...props }) => {
  const sendInfoRoadMap = (e) => {
    sendPageToParent(e.target.id);
  };
  return (
    <button {...props} onClick={sendInfoRoadMap} id={id} className="rmm-box">
      <span className="rmm-button-name"> {name}</span>
    </button>
  );
};

export function RoadMapMenu({ toggleRoadMap, redirectTo }) {
  const sentInoRoadMap = () => {
    toggleRoadMap();
  };
  const sendPageToParent = (page) => {
    redirectTo(page);
  };
  const backgroundImageHome = { backgroundImage: "url(" + bgHome + ")" };
  const backgroundImageIllu = { backgroundImage: "url(" + hypolove + ")" };
  const backgroundImageGraph = { backgroundImage: "url(" + rugby + ")" };
  const backgroundImageCv = { backgroundImage: "url(" + cvpp + ")" };
  return (
    <>
      <div className="container-rmm">
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="home"
          name="Acceuil"
          style={backgroundImageHome}
        />
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="illustration"
          name="Illustration"
          style={backgroundImageIllu}
        />
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="graphisme"
          name="Graphisme"
          style={backgroundImageGraph}
        />
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="cv"
          name="CV"
          style={backgroundImageCv}
        />
        <Linkitem
          style={{ height: "20px", fontSize: ".6rem" }}
          sendPageToParent={sendPageToParent}
          id="legalmention"
          name="Mentions Legales"
        />

        <span onClick={sentInoRoadMap} className="close">
          <CloseButton className="close"></CloseButton>
        </span>
      </div>
    </>
  );
}
