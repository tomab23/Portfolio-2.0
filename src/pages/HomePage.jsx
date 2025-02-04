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
import ScrollToTop from "../components/custom/buttons/ScrollToTop";
import CustomTitle from "../components/custom/CustomTitle";

const HomePage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div>
      <Header home />
      <div className="">
      <CustomTitle className={"text-center text-4xl mt-5 mb-10"}>
        {t("WELCOME")}
      </CustomTitle>
      <h2>{t("TEST")}</h2> <br />

      <AboutMe />
      <Skills />
      <LastProjects />
      <Experiences />
      <ContactMe />
      <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
