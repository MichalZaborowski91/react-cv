import { Media } from "../Media/Media";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <h1 className={style.header__title}>Michal Zaborowski</h1>
        <p className={style.header__description}>Frontend Developer</p>
      </div>
      <Media />
    </div>
  );
};
