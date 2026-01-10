import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Certificates } from "./pages/Certifcates/Certificates";
import { Projects } from "./pages/Projects/Projects";
import { NotFound } from "./pages/NotFound/NotFound";
import Notiflix from "notiflix";

function App() {
  Notiflix.Notify.init({
    width: "280px",
    position: "center-top",
    distance: "10px",
    timeout: 2500,
    fontSize: "16px",
    cssAnimationStyle: "fade",
    backgroundColor: "#202c47",
    useIcon: true,
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
