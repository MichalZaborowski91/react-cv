import { useEffect, useState } from "react";
import style from "./Skills.module.scss";

export const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    setIsExpanded(isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={`${style.skills} ${isExpanded ? "" : style.skillsCollapsed}`}
    >
      <div className={style.skills__headBox}>
        <h2 className={style.skills__title}>Skills</h2>
      </div>
      <ul className={style.skills__skillsList}>
        <li>
          <b>Frontend fundamentals:</b> HTML, CSS/SCSS, JavaScript
        </li>
        <li>
          <b>Frameworks & Libraries:</b> React, Node.js, Axios
        </li>
        <li>
          <b>Tools & Platforms:</b> Git, GitHub, Parcel, Npm, MongoDB Compass,
          Insomnia, Postman, Trello, Netlify
        </li>
        <li>
          <b>Databases:</b> MongoDB Basics
        </li>
        <li>
          <b>Concepts:</b> Responsive Design, REST API, CRUD Operations, Web
          Performance Basics, React Hooks, Component-based Architecture, CSS
          Architecture (BEM)
        </li>
      </ul>
      <div
        className={`${style.skills__headBox} ${
          isExpanded ? "" : style.hideLangTitle
        }`}
      >
        <h2 className={style.skills__title}>Languages</h2>
      </div>
      <ul className={style.skills__langList}>
        <li>
          <b>English:</b> B1
        </li>
        <li>
          <b>Polish:</b> Native
        </li>
      </ul>
      <div className={style.skills__headBox}>
        <h2 className={style.skills__title}>Soft Skills</h2>
      </div>
      <ul className={style.skills__softSkillsList}>
        <li>Attention to Detail</li>
        <li>Problem Solving</li>
        <li>Communication</li>
        <li>Organization</li>
        <li>Teamwork</li>
      </ul>
      <button
        type="button"
        className={style.skills__button}
        onClick={handleExpand}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
};
