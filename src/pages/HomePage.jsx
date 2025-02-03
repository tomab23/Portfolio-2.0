import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutMe from "../components/aboutME/AboutMe";
import Skills from "../components/skills/Skills";
import LastProjects from "../components/projects/LastProjects";
import ContactMe from "../components/conatct/ContactMe";
import Experiences from "../components/experiences/Experiences";
import TopToScroll from "../components/TopToScroll";

const HomePage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div className="text-center">
      <Header />
      <h1>Home page - Portfolio 2.0</h1>
      <h2>{t("TEST")}</h2>
      <Button onClick={() => navigate("/cv")}>cv page</Button>

      <AboutMe />
      <Skills />
      <LastProjects />
      <Experiences />
      <ContactMe />
      <TopToScroll />
      <Footer />
    </div>
  );
};

export default HomePage;
