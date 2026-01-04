import { ReactComponent as Home } from "../../images/icons/home.svg";
import { useNavigate } from "react-router-dom";
import style from "./HomeButton.module.scss";

export const HomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <button type="button" onClick={handleClick} className={style.homeButton}>
      <Home className={style.homeButton__icon} />
      <span>Home Page</span>
    </button>
  );
};
