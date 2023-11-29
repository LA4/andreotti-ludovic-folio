import { RoadMap } from "./pages/components/roadMap/RoadMAp.jsx";
import { Footer } from "./pages/components/Footer.jsx";
import { Home } from "./pages/home/home.jsx";
import { Cv } from "./pages/cv-modif/cv.jsx";
import { Illustration } from "./pages/illustration/Illustration.jsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Graphisme } from "./pages/grapism/Graphism.jsx";

function App() {
  const [showPage, setShowPage] = useState("home");
  const knowPage = (data) => {
    if (data == "home") {
      setShowPage("home");
    }
    if (data == "cv") {
      setShowPage("cv");
    }
    if (data == "illustration") {
      setShowPage("illustration");
    }
    if (data == "graphisme") {
      setShowPage("graphisme");
    }
  };
  const clickNext = (page) => {
    if (page === "home") {
      setShowPage("illustration");
    }
    if (page === "illustration") {
      setShowPage("cv");
    }
    if (page === "cv") {
      setShowPage("graphisme");
    }
    if (page === "graphisme") {
      setShowPage("home");
    }
  };
  return (
    <>
      <div>
        <RoadMap knowPage={knowPage}></RoadMap>
        <AnimatePresence>
          {showPage == "home" ? <Home></Home> : ""}
          {showPage == "illustration" ? <Illustration></Illustration> : ""}
          {showPage == "cv" ? <Cv></Cv> : ""}
          {showPage == "graphisme" ? <Graphisme></Graphisme> : ""}
        </AnimatePresence>

        <Footer clickNext={clickNext} page={showPage}></Footer>
      </div>
    </>
  );
}

export default App;