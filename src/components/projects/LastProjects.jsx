import { useTranslation } from "react-i18next";
import CustomLinkButton from "../custom/buttons/CustomLinkButton"
import CustomTitle from "../custom/CustomTitle"
import CardProject from "./CardProject"
import { ProjectsMockFr } from '../../models/ProjectsMockFr';
import { ProjectsMockEn } from "../../models/ProjectsMockEn";

const LastProjects = () => {

  const { t, i18n } = useTranslation();
  const mock = i18n.language === "fr" ?  ProjectsMockFr : ProjectsMockEn;

  return (
    <div id="projects" className="flex flex-col gap-10">
      <CustomTitle className={"title"}>
        Derniers projets
      </CustomTitle>

{/* LAST PROJECTS */}
    <div className="flex flex-wrap gap-5 max-sm:justify-center ">
            {mock.map((project) => (
              <CardProject key={project.id} project={project} />
            )).slice(-3).reverse()}
      </div>

      <CustomLinkButton title={"Voir tout mes projets"} page={"projets"} classname={"self-start bg-teal-600 dark:bg-teal-600"} />
    </div>
  )
}

export default LastProjects