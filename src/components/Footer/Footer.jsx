import { Media } from "../Media/Media";
import style from "./Footer.module.scss";
import Notiflix from "notiflix";

export const Footer = () => {
  const handleDownloadMessage = () => {
    Notiflix.Notify.success("Thank you for your time 👍");
  };

  return (
    <div className={style.footer}>
      <Media variant="footer" />

      <a
        href="/michalZaborowskiCv.pdf"
        download="Michal Zaborowski CV.pdf"
        className={style.footer__downloadButton}
        onClick={handleDownloadMessage}
      >
        <span>Download CV</span>
      </a>
    </div>
  );
};
