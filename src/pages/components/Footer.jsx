import "./components.css";
import { Arrow } from "../../icons/Arrow";
export function Footer({ clickNext, page }) {
  const toNextPage = () => {
    clickNext(page);
  };

  return (
    <>
      <button
        aria-label="Aller à la page suivante"
        tabIndex="0"
        onClick={toNextPage}
        className="container-footer"
      >
        <Arrow className="arrow-down" width="70px" height="45px"></Arrow>
      </button>
    </>
  );
}
