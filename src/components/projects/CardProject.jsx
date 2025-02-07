import { Button, Card } from "flowbite-react";
import test from "../../assets/test.png"
import { ArrowRight } from 'lucide-react';
import BagdeProject from "./BagdeProject";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const CardProject = ({ project }) => {

    // const tech = ["React.js", "Tailwind", "Javascript"]
    // const name = "Portofolio 2.0";

    const navigate = useNavigate();
    const { t } = useTranslation();

    const goProject = () => {
      navigate(`/project/${project.name}`, {
        state : {
          id: project.id,
        }
      });
    };
  return (
    <Card
    className="max-w-xs hover:rotate-1"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={project.imgs[0]}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {project.name}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {project.resume}
    </p>
    {/* BADGE */}
    <div className="self-start flex gap-2">
    {project.badge.map((tech) => (
              <BagdeProject key={tech} name={tech} />
            ))}
    </div>
    {/* BUTTON */}
    <Button size="sm" className="self-end flex" onClick={goProject}>
        Read more
        <ArrowRight className="ml-1 h-5 w-5" />
      </Button>
  </Card>
  )
}

export default CardProject