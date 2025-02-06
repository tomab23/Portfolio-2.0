import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import CvPage from "../pages/CvPage";
import ListProjectsPage from "../pages/ListProjectsPage";

const RoutesApp = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/projets" element={<ListProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default RoutesApp