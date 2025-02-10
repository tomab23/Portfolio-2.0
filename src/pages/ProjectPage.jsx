import { useLocation } from "react-router";
import BackButton from "../components/custom/buttons/BackButton";
import CustomTitle from "../components/custom/CustomTitle";
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";
import ScrollPageZero from "../helpers/ScrollPageZero";
import { useTranslation } from "react-i18next";
import { ProjectsMockFr } from "../models/ProjectsMockFr";
import { ProjectsMockEn } from "../models/ProjectsMockEn";

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
  }, [project]);



  return (
    <div className="h-[100vh]">
      <ScrollPageZero />
      <Header />
      <div className="flex items-center justify-between mr-6 max-sm:mr-4">
        <BackButton />
        <CustomTitle className={"text-center"}>
          {project.name}
        </CustomTitle>
      </div>
    </div>
  );
};

export default ProjectPage;
