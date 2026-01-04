import { About } from "../../components/About/About";
import { Education } from "../../components/Education/Education";
import { Header } from "../../components/Header/Header";
import { Picture } from "../../components/Picture/Picture";
import { Projects } from "../../components/Projects/Projects";
import { Skills } from "../../components/Skills/Skills";
import style from "./Home.module.scss";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div className={style.pageHome}>
      <Header />
      <div className={style.pageHome__picture}>
        <Picture />
      </div>
      <div className={style.pageHome__components}>
        <About />
        <Skills />
        <Education />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};
