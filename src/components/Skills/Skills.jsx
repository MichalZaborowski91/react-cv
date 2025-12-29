import { useEffect, useState } from "react";
import style from "./Skills.module.scss";

export const Skills = ({ onExpandChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    onExpandChange(isExpanded);
  }, [isExpanded, onExpandChange]);

  return (
    <div className={`${style.container} ${isExpanded ? style.expand : ""}`}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>Skills</h2>
      </div>
      <ul className={style.list}>
        <li>
          <b>Frontend fundamentals:</b> HTML, CSS/SCSS, JavaScript
        </li>
        <li>
          <b>Frameworks & Libraries:</b> React, Node.js, Axios
        </li>
        <li>
          <b>Tools & Platforms:</b> Git, GitHub, Parcel, Npm, MongoDB Compass,
          Insomnia, Postman, Trello
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
      <div className={`${style.headBox} ${isExpanded ? style.hide : ""}`}>
        <h2 className={style.headBox__head}>Languages</h2>
      </div>
      <ul className={style.langList}>
        <li>
          <b>English:</b> B1
        </li>
        <li>
          <b>Polish:</b> Native
        </li>
      </ul>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>Soft Skills</h2>
      </div>
      <ul>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem Solving</li>
        <li>Organization</li>
        <li>Attention to Detail</li>
      </ul>
      <button
        type="button"
        className={style.container__button}
        onClick={handleExpand}
      >
        {isExpanded ? "Expand" : "Collapse"}
      </button>
    </div>
  );
};
