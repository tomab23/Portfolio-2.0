import { useLocation } from "react-router";
import BackButton from "../components/custom/buttons/BackButton";
import CustomTitle from "../components/custom/CustomTitle";
import Header from "../components/layout/Header";
import { useState } from "react";
import ScrollPageZero from "../helpers/ScrollPageZero";

const ProjectPage = () => {
  const location = useLocation();

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

  return (
    <div className="h-[100vh]">
      <ScrollPageZero />
      <Header />
      <div className="flex items-center justify-between mr-6 max-sm:mr-4">
        <BackButton />
        <CustomTitle className={"text-center"}>
          Projet {location.state.id}
        </CustomTitle>
      </div>
    </div>
  );
};

export default ProjectPage;
