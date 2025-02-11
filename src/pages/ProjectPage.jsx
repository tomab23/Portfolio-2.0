import { useLocation } from "react-router";
import BackButton from "../components/custom/buttons/BackButton";
import CustomTitle from "../components/custom/CustomTitle";
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";
import ScrollPageZero from "../helpers/ScrollPageZero";
import { useTranslation } from "react-i18next";
import { ProjectsMockFr } from "../models/ProjectsMockFr";
import { ProjectsMockEn } from "../models/ProjectsMockEn";
import BagdeProject from "../components/projects/BagdeProject";
import CustomLinkButton from "../components/custom/buttons/CustomLinkButton";
import ScrollToTop from "../components/custom/buttons/ScrollToTop";

const ProjectPage = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const projectstList = i18n.language === "fr" ? ProjectsMockFr : ProjectsMockEn ;

  const [project, setProject] = useState({
    id: null,
    name: "",
    resume: "",
    badge: [],
    tech: [],
    outil: [],
    description: "",
    more: "",
    date: "",
    github: "",
    site: "",
    imgs: [],
  });

  useEffect(() => {
     const projectById = projectstList.find(
        (project) => project.id === location.state.id)
      setProject(projectById);
  }, [projectstList]);

  const siteExist = project.site === "" ? false : true;

  return (
    <div className="pb-10 min-h-[100vh]">
      <ScrollPageZero />
      <Header />
      <div className="flex items-center justify-between mr-6 max-sm:mr-4">
        <BackButton />
        <CustomTitle className={"text-center"}>
          {project.name}
        </CustomTitle>
      </div>
    {/* BODY */}
      <div className="ml-5 mt-5 dark:text-light flex flex-col gap-5">
        {/* DATE */}
        <h2>{project.date}</h2>
        {/* TECH */}
        <div className="flex gap-2">
          {project.tech.map((tech) => (
            <BagdeProject key={tech} name={tech} />
          ))}
        </div>
        {/* TEXT */}
          <p className="w-[90%]">{project.resume}</p>
          <p className="w-[90%]">{project?.more}</p>
        {/* OUTILS */}
        <div>
          <p>{t("PROJECT.TOOLS")} : </p>
          {project.outil.map((outil) => (
            <p key={outil} before="• " className="before:content-[attr(before)]">{outil}</p>
          ))}
        </div>
        {/* LINKS */}
        <div className="flex gap-2">
          <CustomLinkButton title={"GitHub"} link page={project.github} classname={"bg-[#171515] dark:bg-[#171515]"}  />
          {siteExist &&
          <CustomLinkButton title={"Site"} link page={project?.site} classname={"bg-teal-600 dark:bg-teal-600"}  />
          }
        </div>
      {/* IMG */}
      <div className="flex flex-wrap max-lg:gap-3 gap-10 mt-5">
          {project.imgs?.map((img) => (
            <img key={img} src={img} className="h-[20rem] w-[40rem]"/>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ProjectPage;
