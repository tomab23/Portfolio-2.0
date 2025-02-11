import { useTranslation } from "react-i18next";
import BackButton from "../components/custom/buttons/BackButton"
import CustomTitle from "../components/custom/CustomTitle"
import Header from "../components/layout/Header"
import { ProjectsMockFr } from "../models/ProjectsMockFr"
import { ProjectsMockEn } from "../models/ProjectsMockEn"
import CardProject from "../components/projects/CardProject";
import ScrollToTop from "../components/custom/buttons/ScrollToTop";
import ScrollPageZero from "../helpers/ScrollPageZero";

const ListProjectsPage = () => {

    const { t, i18n } = useTranslation();
    const mock = i18n.language === "fr" ?  ProjectsMockFr : ProjectsMockEn;


  return (
    <div className="">
        <ScrollPageZero />
        <Header />
        <div className="flex items-center justify-between mr-6 max-sm:mr-4">
        <BackButton />
        <CustomTitle className={"text-center"}>
            {t("PROJECT.TITLE")} ({mock.length})
        </CustomTitle>
        </div>

        <div className="flex flex-wrap gap-10 justify-center py-10 mx-2">
            {mock.map((project) => (
              <CardProject key={project.id} project={project} />
            )).reverse()}
      </div>
      <ScrollToTop/>
    </div>
  )
}

export default ListProjectsPage