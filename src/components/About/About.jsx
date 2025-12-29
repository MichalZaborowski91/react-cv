import style from "./About.module.scss";

export const About = () => {
  return (
    <div className={style.container}>
      <div className={style.headBox}>
        <h2 className={style.headBox__head}>About me</h2>
      </div>
      <p className={style.container__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eius.
        Aliquam suscipit repellat tempora ipsa, voluptatibus, ratione provident
        aliquid explicabo ea eum error dicta pariatur et facere iusto incidunt
        sequi quidem assumenda id omnis. Repellendus!
      </p>

      <button type="button" className={style.container__button}>
        Read more
      </button>
    </div>
  );
};
