import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Picture } from "../../components/Picture/Picture";
import { ReadMore } from "../../components/ReadMore/ReadMore";
import style from "./About.module.scss";

export const About = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.pictureContainer}>
        <Picture />
      </div>
      <div className={style.cardsContainer}>
        <ReadMore />
      </div>
      <Footer />
    </div>
  );
};
