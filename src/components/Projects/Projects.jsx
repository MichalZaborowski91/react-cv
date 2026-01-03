import { useNavigate } from "react-router-dom";
import { ReactComponent as Github2 } from "../../images/icons/github2.svg";
import { ReactComponent as Link } from "../../images/icons/link.svg";
import style from "./Projects.module.scss";

export const Projects = () => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate("/projects");
  };
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>My Projects</h2>
      </div>
      <div className={style.projectsContainer}>
        <div className={style.headerBox}>
          <h4 className={style.headerBox__head}>Bergantin Apartment</h4>
          <div className={style.icons}>
            <a
              href="https://aptbergantin.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bergantin Apartment"
            >
              <Link className={style.icons__link} />
            </a>
            <a
              href="https://github.com/MichalZaborowski91/bergantinApartmentWebSite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github repo"
            >
              <Github2 className={style.icons__git} />
            </a>
          </div>
        </div>

        <div className={style.projectFrame}>
          <iframe
            src="https://aptbergantin.netlify.app/"
            scrolling="no"
          ></iframe>
        </div>
        <div className={style.headerBox}>
          <h4 className={style.headerBox__head}>React CV</h4>
          <div className={style.icons}>
            <a
              href="https://aptbergantin.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bergantin Apartment"
            >
              <Link className={style.icons__link} />
            </a>
            <a
              href="https://github.com/MichalZaborowski91/bergantinApartmentWebSite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github repo"
            >
              <Github2 className={style.icons__git} />
            </a>
          </div>
        </div>
        <div className={style.projectFrame}>
          <iframe
            src="https://fascinating-babka-0b548d.netlify.app/"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <button
        type="button"
        className={style.container__button}
        onClick={handleViewMore}
      >
        View More
      </button>
    </div>
  );
};
