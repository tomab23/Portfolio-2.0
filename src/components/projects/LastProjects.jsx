import { useTranslation } from "react-i18next";
import CustomLinkButton from "../custom/buttons/CustomLinkButton"
import CustomTitle from "../custom/CustomTitle"
import CardProject from "./CardProject"
import { ProjectsMockFr } from '../../models/ProjectsMockFr';
import { ProjectsMockEn } from "../../models/ProjectsMockEn";

const LastProjects = () => {

  const { t, i18n } = useTranslation();
  const mock = i18n.language === "fr-FR" ?  ProjectsMockFr : ProjectsMockEn;

  return (
    <div id="projects" className="flex flex-col gap-10 max-sm:gap-5">
      <CustomTitle className={"title"}>
        {t("TITLE.LAST")}
      </CustomTitle>

{/* LAST PROJECTS */}
    <div className="flex flex-wrap gap-5 max-sm:justify-center ">
            {mock.map((project) => (
              <CardProject key={project.id} project={project} />
            )).slice(-3).reverse()}
      </div>

      <CustomLinkButton title={t("PROJECT.BUTTON")} page={"projects"} classname={"self-start bg-teal-600 dark:bg-teal-600 md:-mt-5"} />
    </div>
  )
}

export default LastProjects