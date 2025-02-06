import { Button, Card } from "flowbite-react";
import test from "../../assets/test.png"
import { ArrowRight } from 'lucide-react';
import BagdeProject from "./BagdeProject";

const CardProject = () => {

    const tech = ["React.js", "Tailwind", "Javascript"]
  return (
    <Card
    className="max-w-xs hover:rotate-1"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={test}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Portofolio 2.0
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Plus d'informations sur se portfolio
    </p>
    {/* BADGE */}
    <div className="self-start flex gap-2">
    {tech.map((tech) => (
              <BagdeProject key={tech} name={tech} />
            ))}
    </div>
    {/* BUTTON */}
    <Button size="sm" className="self-end flex">
        Read more
        <ArrowRight className="ml-1 h-5 w-5" />
      </Button>
  </Card>
  )
}

export default CardProject