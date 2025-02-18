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
import ScrollPage from "../helpers/ScrollPage";

const HomePage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <Header home />
      {/* <h2 className="absolute mt-16 ml-5 dark:text-light">{t("TEST")}</h2> */}
      {/* BODY */}
      {/* <div className="flex justify-center"> */}
      <div className="flex flex-col  2xl:w-[70vw] max-xl:w-[92vw] md:w-[92vw] self-center gap-10 max-sm:gap-5">
      <CustomTitle className={"text-center text-4xl mt-5"} id={"about"}>
        {t("WELCOME")}
      </CustomTitle>
      <AboutMe />
      <Skills />
      <LastProjects />
      <Experiences />
      {/* <ContactMe /> */}
      <ScrollToTop />
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
