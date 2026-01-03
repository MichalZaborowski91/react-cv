import { useNavigate } from "react-router-dom";
import { ReactComponent as EduIcon } from "../../images/icons/education.svg";
import style from "./Education.module.scss";

export const Education = () => {
  const navigate = useNavigate();
  const handleCertificates = () => {
    navigate("/certificates");
  };
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>Education</h2>
      </div>
      <div className={style.wrapper}>
        <div className={style.card}>
          <EduIcon className={style.card__icon} />
          <h3 className={style.card__head}>GoIT Full Stack Developer Course</h3>
          <p className={style.card__date}>
            <b>2022 - 2023</b>
          </p>
        </div>
        <div className={style.card}>
          <EduIcon className={style.card__icon} />
          <h3 className={style.card__head}>IT Technical Secondary School</h3>
          <p className={style.card__date}>
            <b>2007 - 2011</b>
          </p>
        </div>
        <button
          type="button"
          className={style.container__button}
          onClick={handleCertificates}
        >
          Certificates
        </button>
      </div>
    </div>
  );
};
