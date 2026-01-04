import { useNavigate } from "react-router-dom";
import style from "./Education.module.scss";

export const Education = () => {
  const navigate = useNavigate();
  const handleCertificates = () => {
    navigate("/certificates");
  };
  return (
    <div className={style.education}>
      <div className={style.education__headBox}>
        <h2 className={style.education__title}>Education</h2>
      </div>
      <div className={style.education__wrapper}>
        <div className={style.education__card}>
          <h3 className={style.education__cardTitle}>
            GoIT Full Stack Developer Course
          </h3>
          <p className={style.education__cardDate}>
            <b>2022 - 2023</b>
          </p>
        </div>
        <div className={style.education__card}>
          <h3 className={style.education__cardTitle}>
            IT Technical Secondary School
          </h3>
          <p className={style.education__cardDate}>
            <b>2007 - 2011</b>
          </p>
        </div>
        <button
          type="button"
          className={style.education__button}
          onClick={handleCertificates}
        >
          Certificates
        </button>
      </div>
    </div>
  );
};
