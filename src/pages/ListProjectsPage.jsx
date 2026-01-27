import { useTranslation } from "react-i18next";
import BackButton from "../components/custom/buttons/BackButton"
import CustomTitle from "../components/custom/CustomTitle"
import Header from "../components/layout/Header"
import { ProjectsMockFr } from "../models/ProjectsMockFr"
import { ProjectsMockEn } from "../models/ProjectsMockEn"
import CardProject from "../components/projects/CardProject";
import ScrollToTop from "../components/custom/buttons/ScrollToTop";
import ScrollPageZero from "../helpers/ScrollPageZero";
import { Suspense } from "react";
import Loading from "../components/loader/Loading";

const ListProjectsPage = () => {

    const { t, i18n } = useTranslation();
    const mock = i18n.language === "fr-FR" ?  ProjectsMockFr : ProjectsMockEn;


  return (
    <div className="min-h-[100vh]">
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
              <Suspense fallback={<Loading />} key={project.id}>
                <CardProject key={project.id} project={project} />
              </Suspense>
            )).reverse()}
      </div>
      <ScrollToTop/>
    </div>
  )
}

export default ListProjectsPage