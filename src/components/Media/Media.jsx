import { ReactComponent as Email } from "../../images/icons/email.svg";
import { ReactComponent as Github } from "../../images/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../images/icons/linkedin.svg";
import style from "./Media.module.scss";

export const Media = ({ variant }) => {
  return (
    <div
      className={`${style.media} ${
        variant === "footer" ? style["media--footer"] : ""
      }`}
    >
      <a href="mailto:mkzaborowski@gmail.com" aria-label="Send email">
        <Email className={style.media__icon} />
      </a>

      <a
        href="https://www.github.com/MichalZaborowski91"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className={style.media__icon} />
      </a>

      <a
        href="https://www.linkedin.com/in/micha%C5%82-zaborowski-0316ba373/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedIn className={style.media__icon} />
      </a>
    </div>
  );
};
