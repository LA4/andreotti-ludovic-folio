import { useState } from "react";
import "./roadmap.css";
import { RoadMapMenu } from "./RoadmapMenu.jsx";

export function RoadMap({ knowPage }) {
  const [roadMapstate, setRoadMapState] = useState(false);
  const toggleRoadMap = () => {
    setRoadMapState(!roadMapstate);
  };
  const redirectTo = (page) => {
    knowPage(page);
    setRoadMapState(!roadMapstate);
  };
  return (
    <>
      <div onClick={toggleRoadMap} className="container-roadmap">
        <span>Plan du site</span>
      </div>
      {roadMapstate && (
        <RoadMapMenu
          toggleRoadMap={toggleRoadMap}
          redirectTo={redirectTo}></RoadMapMenu>
      )}
    </>
  );
}
