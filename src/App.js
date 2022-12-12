import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        color="255, 180, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        className="z-[9999]"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
