import { useLocation } from "react-router";
import BackButton from "../components/custom/buttons/BackButton";
import CustomTitle from "../components/custom/CustomTitle";
import Header from "../components/layout/Header";
import { useCallback, useEffect, useState } from "react";
import ScrollPageZero from "../helpers/ScrollPageZero";
import { useTranslation } from "react-i18next";
import { ProjectsMockFr } from "../models/ProjectsMockFr";
import { ProjectsMockEn } from "../models/ProjectsMockEn";
import BagdeProject from "../components/projects/BagdeProject";
import CustomLinkButton from "../components/custom/buttons/CustomLinkButton";
import ScrollToTop from "../components/custom/buttons/ScrollToTop";
import ImageViewer from 'react-simple-image-viewer';

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
  const moreDescription = project.more === "" ? false : true;

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = 
    project.imgs
  ;

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
      <div className="ml-5 max-sm:ml-3 mt-5 dark:text-light flex flex-col gap-5">
        {/* DATE */}
        <h2 className="font-bold">{project.date}</h2>
        {/* TECH */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <BagdeProject key={tech} name={tech} />
          ))}
        </div>
        {/* TEXT */}
          <p className="w-[90%] max-sm:w-[95%] text-pretty">{project.description}</p>
          {moreDescription &&
          <p className="w-[90%] max-sm:w-[95%] text-pretty">{project.more}</p>
          }
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
      {/* <div className="flex flex-wrap max-lg:gap-3 gap-10 mt-5">
          {project.imgs?.map((img) => (
            <img key={img} src={img} className="h-[20rem] w-[40rem]"/>
          ))}
        </div> */}
            <div className="flex flex-wrap max-lg:gap-3 gap-10 mt-5 z-50">
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          className="h-[20rem] max-sm:h-[11rem] w-[40rem] max-sm:w-[22.5rem] cursor-pointer"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
      </div>
      {!isViewerOpen && <ScrollToTop />}
      
    </div>
  );
};

export default ProjectPage;
