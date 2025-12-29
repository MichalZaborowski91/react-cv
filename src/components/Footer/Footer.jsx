import { Media } from "../Media/Media";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.container}>
      <Media variant="footer" />
      <button type="button" className={style.downloadButton}>
        <span>Download CV</span>
      </button>
    </div>
  );
};
