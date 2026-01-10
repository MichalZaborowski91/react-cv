import style from "./PracticeCard.module.scss";
import { ReactComponent as Link } from "../../images/icons/link.svg";

export const PracticeCard = () => {
  return (
    <div className={style.practiceCard}>
      <div className={style.practiceCard__headBox}>
        <h2 className={style.practiceCard__title}>Smart Practice</h2>
      </div>
      <div className={style.practiceCard__wrapper}>
        <div className={style.practiceCard__headerBox}>
          <h4 className={style.practiceCard__projectTitle}>
            Codesandbox Practice
          </h4>
          <div className={style.practiceCard__iconsWrapper}>
            <a
              href="https://codesandbox.io/u/michalzaborowski91"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codesandbox"
            >
              <Link className={style.practiceCard__iconLink} />
            </a>
          </div>
        </div>

        <div className={style.practiceCard__frame}>
          <iframe
            src="https://codesandbox.io/u/michalzaborowski91"
            scrolling="no"
            title="Preview of GitHub"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
