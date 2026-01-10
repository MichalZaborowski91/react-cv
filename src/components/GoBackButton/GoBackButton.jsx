import { ReactComponent as GoBack } from "../../images/icons/goBack.svg";
import { ReactComponent as Home } from "../../images/icons/home.svg";
import { useNavigate } from "react-router-dom";
import style from "./GoBackButton.module.scss";

export const GoBackButton = ({ isNotFound = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button type="button" onClick={handleClick} className={style.button}>
      {isNotFound ? (
        <>
          <Home className={style.button__icon} />
          <span>Home</span>
        </>
      ) : (
        <>
          <GoBack className={style.button__icon} />
          <span>Go back</span>
        </>
      )}
    </button>
  );
};
