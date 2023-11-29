import { CloseButton } from "../../../icons/close.jsx";

const Linkitem = ({ id, name, sendPageToParent, ...props }) => {
  const sendInfoRoadMap = (e) => {
    sendPageToParent(e.target.id);
  };
  return (
    <button {...props} onClick={sendInfoRoadMap} id={id} className="rmm-box">
      {name}
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
  return (
    <>
      <div className="container-rmm">
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="home"
          name="Acceuil"
        />
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="illustration"
          name="Illustration"
        />
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="graphisme"
          name="Graphisme"
        />
        <Linkitem sendPageToParent={sendPageToParent} id="cv" name="CV" />
        <Linkitem
          style={{ height: "20px", fontSize: ".6rem" }}
          sendPageToParent={sendPageToParent}
          id="cv"
          name="Mentions Legales"
        />

        <span onClick={sentInoRoadMap} className="close">
          <CloseButton className="close"></CloseButton>
        </span>
      </div>
    </>
  );
}
