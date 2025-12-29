import { useNavigate } from "react-router-dom";
import style from "./About.module.scss";

export const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>About me</h2>
      </div>
      <p className={style.container__description}>
        Creative frontend developer with experience in JavaScript, React, and
        Node.js. Passionate about building responsive and intuitive interfaces
        that combine aesthetics with functionality. I enjoy improving my skills
        and working on projects that make a real impact for users.
      </p>
      <button
        type="button"
        onClick={handleClick}
        className={style.container__button}
      >
        Read more
      </button>
    </div>
  );
};
