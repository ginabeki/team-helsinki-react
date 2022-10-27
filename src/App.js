import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Event from "./pages/Event";
import Job from "./pages/Job";
import Forum from "./pages/Forum";
// import Button from "./components/Button";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/job" element={<Job />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
