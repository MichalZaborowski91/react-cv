import { ReactComponent as GoBack } from "../../images/icons/goBack.svg";
import { useNavigate } from "react-router-dom";
import style from "./GoBackButton.module.scss";

export const GoBackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <button type="button" onClick={handleClick} className={style.backButton}>
      <GoBack className={style.backButton__icon} />
      <span>Go back</span>
    </button>
  );
};
