import { ReactComponent as GoBack } from "../../images/icons/goBack.svg";
import { useNavigate } from "react-router-dom";
import style from "./ReadMore.module.scss";

export const ReadMore = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.headBox}>
          <h2 className={style.headBox__head}>About me</h2>
        </div>
        <p className={style.container__description}>
          I am a frontend developer passionate about creating elegant and
          functional web applications. My experience includes JavaScript, React,
          Node.js, and building interactive interfaces that perform smoothly
          across devices. I focus on combining aesthetics with usability, paying
          attention to detail in every project. Beyond coding, I enjoy new
          technologies, UI/UX design, and optimizing application performance. I
          also like playing chess, cycling, and exploring creative hobbies,
          which help me develop patience, focus, and strategic thinking. I value
          clear communication, effective problem-solving, and continuous skill
          development, both independently and within a team.
        </p>
      </div>
      <button type="button" onClick={handleClick} className={style.backButton}>
        <GoBack className={style.backButton__icon} />
        <span>Go back</span>
      </button>
    </div>
  );
};
