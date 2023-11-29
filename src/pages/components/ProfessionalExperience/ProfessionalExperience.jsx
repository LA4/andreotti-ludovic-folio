import { useState } from "react";
import "./professionalExperience.css";
export function ProfessionalExperience({ children, arrayOf }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="professional-experience">
      <div onClick={() => setVisible(!visible)} className="pe-container">
        <h6 className="pe-h6">{children}</h6>
        {visible && (
          <ul className="pe-list">
            {arrayOf.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
