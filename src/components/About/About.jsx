import { useNavigate } from "react-router-dom";
import style from "./About.module.scss";

export const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className={style.about}>
      <div className={style.about__headBox}>
        <h2 className={style.about__title}>About me</h2>
      </div>
      <p className={style.about__description}>
        Creative frontend developer with experience in JavaScript, React, and
        Node.js. Passionate about building responsive and intuitive interfaces
        that combine aesthetics with functionality. I enjoy improving my skills
        and working on projects that make a real impact for users.
      </p>
      <button
        type="button"
        onClick={handleClick}
        className={style.about__button}
      >
        <span>Read More</span>
      </button>
    </div>
  );
};
