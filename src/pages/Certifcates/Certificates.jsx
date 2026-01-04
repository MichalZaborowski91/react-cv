import { Certs } from "../../components/Certs/Certs";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import style from "./Certificates.module.scss";

export const Certificates = () => {
  return (
    <div className={style.pageCertificates}>
      <Header />
      <Certs />
      <Footer />
    </div>
  );
};
