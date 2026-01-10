import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Github2 } from "../../images/icons/github2.svg";
import { ReactComponent as Link } from "../../images/icons/link.svg";
import style from "./ProjectsComponent.module.scss";

export const ProjectsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProjectsPage = location.pathname === "/projects";

  const handleViewMore = () => {
    navigate("/projects");
  };
  return (
    <div className={style.projects}>
      <div className={style.projects__headBox}>
        <h2 className={style.projects__title}>My Projects</h2>
      </div>
      <div className={style.projects__wrapper}>
        <div className={style.projects__headerBox}>
          <h4 className={style.projects__projectTitle}>Bergantin Apartment</h4>
          <div className={style.projects__iconsWrapper}>
            <a
              href="https://aptbergantin.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bergantin Apartment"
            >
              <Link className={style.projects__iconLink} />
            </a>
            <a
              href="https://github.com/MichalZaborowski91/bergantinApartmentWebSite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github repo"
            >
              <Github2 className={style.projects__iconGit} />
            </a>
          </div>
        </div>

        <div className={style.projects__frame}>
          <iframe
            src="https://aptbergantin.netlify.app/"
            scrolling="no"
            title="Preview of my project"
          ></iframe>
        </div>
        <div className={style.projects__headerBox}>
          <h4 className={style.projects__projectTitle}>React CV</h4>
          <div className={style.projects__iconsWrapper}>
            <a
              href="https://aptbergantin.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bergantin Apartment"
            >
              <Link className={style.projects__iconLink} />
            </a>
            <a
              href="https://github.com/MichalZaborowski91/bergantinApartmentWebSite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github repo"
            >
              <Github2 className={style.projects__iconGit} />
            </a>
          </div>
        </div>
        <div className={style.projects__frame}>
          <iframe
            src="https://fascinating-babka-0b548d.netlify.app/"
            scrolling="no"
            title="Preview of my project"
          ></iframe>
        </div>
      </div>
      {!isProjectsPage && (
        <button
          type="button"
          className={style.projects__button}
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};
