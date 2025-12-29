import photo from "../../images/me.png";
import style from "./Picture.module.scss";

export const Picture = () => {
  return (
    <div className={style.container}>
      <img src={photo} alt="My photo" className={style.container__image} />
    </div>
  );
};
