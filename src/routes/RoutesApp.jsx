import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import CvPage from "../pages/CvPage";

const RoutesApp = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default RoutesApp