import { CloseButton } from "../../../icons/close.jsx";

const Linkitem = ({ id, name, sendPageToParent }) => {
  const sendInfoRoadMap = (e) => {
    sendPageToParent(e.target.id);
  };
  return (
    <span onClick={sendInfoRoadMap} id={id} className="rmm-box">
      {name}
    </span>
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
        <Linkitem sendPageToParent={sendPageToParent} id="cv" name="CV" />
        <Linkitem
          sendPageToParent={sendPageToParent}
          id="graphisme"
          name="Graphisme"
        />
        <span onClick={sentInoRoadMap} className="close">
          <CloseButton className="close"></CloseButton>
        </span>
      </div>
    </>
  );
}
