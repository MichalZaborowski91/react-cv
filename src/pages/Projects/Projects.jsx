import { Footer } from "../../components/Footer/Footer";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import { ProjectsComponent } from "../../components/ProjectsComponent/ProjectsComponent";
import { Header } from "../../components/Header/Header";
import style from "./Projects.module.scss";
import { PracticeCard } from "../../components/PracticeCard/PracticeCard";

export const Projects = () => {
  return (
    <div className={style.pageProjects}>
      <Header />
      <div className={style.pageProjects__components}>
        <ProjectsComponent />
        <PracticeCard />
      </div>
      <GoBackButton />
      <Footer />
    </div>
  );
};
