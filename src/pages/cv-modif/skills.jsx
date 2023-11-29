import "./css/skills.css";
import { Tag } from "./../components/Tag.jsx";
import { useState } from "react";
export function Skills({ children, tags }) {
  const [open, setOpen] = useState(false);
  const singleTag = [];
  if (tags != undefined) {
    for (const tag of tags) {
      singleTag.push(tag.title);
    }
  }
  const openSkills = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={openSkills} className="container-skill">
        <span className="title-skills">{children}</span>
        {open &&
          singleTag.map((tag, i) => (
            <Tag fontSize=".9rem" width="100%" key={i}>
              {tag}
            </Tag>
          ))}
      </div>
    </>
  );
}
