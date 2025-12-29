import { Media } from "../Media/Media";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.info}>
        <h1 className={style.info__title}>Michal Zaborowski</h1>
        <p className={style.info__description}>Frontend Developer</p>
      </div>
      <Media />
    </div>
  );
};
