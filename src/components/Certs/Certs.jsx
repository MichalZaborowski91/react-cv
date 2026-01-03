import firstGoIT from "../../images/certs/goit/Michal Zaborowski GOIT Cert 1.jpg";
import secondGoIT from "../../images/certs/goit/Michal Zaborowski GOIT Cert 2.jpg";
import thirdGoIT from "../../images/certs/goit/Michal Zaborowski GOIT Cert 3.jpg";
import itTech from "../../images/certs/itTechnician/Certificate.jpg";
import style from "./Certs.module.scss";
import { GoBackButton } from "../GoBackButton/GoBackButton";

export const Certs = () => {
  return (
    <div className={style.container}>
      <h2 className={style.head}>GoIT Full Stack Developer Cert</h2>
      <img src={firstGoIT} alt="cert" className={style.image} />
      <img src={secondGoIT} alt="cert" className={style.image} />
      <img src={thirdGoIT} alt="cert" className={style.image} />
      <h2 className={style.head}>IT Technical Cert</h2>
      <img src={itTech} alt="cert" className={style.image} />
      <GoBackButton />
    </div>
  );
};
