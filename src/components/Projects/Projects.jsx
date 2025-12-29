import style from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>My Projects</h2>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ipsum
        iure corrupti fuga, autem quos odio placeat quibusdam doloremque
        molestiae id eos officia, optio blanditiis, ducimus quisquam voluptas
        dignissimos rerum.
      </p>

      <button type="button" className={style.container__button}>
        Read more
      </button>
    </div>
  );
};
