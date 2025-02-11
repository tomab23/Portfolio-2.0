import { BrowserRouter, Route, Routes, ScrollRestoration} from "react-router";
import HomePage from "../pages/HomePage";
import CvPage from "../pages/CvPage";
import ListProjectsPage from "../pages/ListProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import ScrollPage from "../helpers/ScrollPage";

const RoutesApp = () => {
  return (
    <div>
    <BrowserRouter>
    <ScrollPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/projects" element={<ListProjectsPage />} />
        <Route path="/project/:name" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default RoutesApp