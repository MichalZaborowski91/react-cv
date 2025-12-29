import style from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>My Projects</h2>
      </div>

      <button type="button" className={style.container__button}>
        Read more
      </button>
    </div>
  );
};
