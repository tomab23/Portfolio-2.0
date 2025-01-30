import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const HomePage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div className="dark:bg-slate-700">
      <Header />
      <h1>Home page - Portfolio 2.0</h1>
      <h2>{t("TEST")}</h2>
      <Button onClick={() => navigate("/cv")}>cv page</Button>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
