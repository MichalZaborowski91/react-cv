import { Footer } from "../../components/Footer/Footer";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import { Header } from "../../components/Header/Header";
import style from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div className={style.pageProjects}>
      <Header />
      <GoBackButton />
      <Footer />
    </div>
  );
};
