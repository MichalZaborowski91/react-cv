import { useState } from "react";
import { About } from "../../components/About/About";
import { Education } from "../../components/Education/Education";
import { Header } from "../../components/Header/Header";
//import { Picture } from "../../components/Picture/Picture";
import { Projects } from "../../components/Projects/Projects";
import { Skills } from "../../components/Skills/Skills";
import style from "./Home.module.scss";

export const Home = () => {
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  return (
    <div
      className={`${style.container} ${
        skillsExpanded ? "" : style.containerExpand
      }`}
    >
      <Header />

      <About />
      <Skills onExpandChange={setSkillsExpanded} />
      <Education />
      <Projects />
    </div>
  );
};
