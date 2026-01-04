import { ReactComponent as SadFace } from "../../images/icons/sadFace.svg";
import { Footer } from "../../components/Footer/Footer";
import { HomeButton } from "../../components/HomeButton/HomeButton";
import style from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={style.pageNotFound}>
      <SadFace className={style.pageNotFound__icon} />
      <p className={style.pageNotFound__errorCode}>404</p>
      <p className={style.pageNotFound__description}>Page Not Found</p>
      <HomeButton />
      <Footer />
    </div>
  );
};
