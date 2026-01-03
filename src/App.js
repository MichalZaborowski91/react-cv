import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Certificates } from "./pages/Certifcates/Certificates";
import { Projects } from "./pages/Projects/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
