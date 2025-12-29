import { ReactComponent as EduIcon } from "../../images/icons/education.svg";
import style from "./Education.module.scss";

export const Education = () => {
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>Education</h2>
      </div>
      <div className={style.wrapper}>
        <div className={style.card}>
          <EduIcon className={style.card__icon} />
          <h3 className={style.card__head}>GoIT Course</h3>
          <p className={style.card__date}>
            <b>2022 - 2023</b>
          </p>
        </div>
        <div className={style.card}>
          <EduIcon className={style.card__icon} />
          <h3 className={style.card__head}>Technikum</h3>
          <p className={style.card__date}>
            <b>2007 - 2011</b>
          </p>
        </div>
        <button type="button" className={style.container__button}>
          Certificates
        </button>
      </div>
    </div>
  );
};
