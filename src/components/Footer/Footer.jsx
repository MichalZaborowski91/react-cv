import { Media } from "../Media/Media";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <Media variant="footer" />
      <button type="button" className={style.footer__downloadButton}>
        <span>Download CV</span>
      </button>
    </div>
  );
};
