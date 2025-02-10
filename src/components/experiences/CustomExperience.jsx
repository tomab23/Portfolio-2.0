import { Timeline } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { CalendarDays } from "lucide-react";
import { ExperiencesMockFr } from "../../models/ExperiencesMockFr";

const CustomExperience = ({ experience }) => {
  const { t } = useTranslation();

  const lastId = ExperiencesMockFr.length;

  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point
          icon={CalendarDays}
          theme={{
            marker: {
              icon: {
                base: "h-4 w-4 text-cyan-700 dark:text-cyan-100",
                wrapper:
                  "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900",
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Title>
            {experience.title} | {experience.entreprise}
            {experience.id === lastId && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                {t("EXP.LATEST")}
              </span>
            )}
          </Timeline.Title>
          <Timeline.Time className="text-dark-ligh dark:text-gray-200">
            {experience.date}
          </Timeline.Time>
          <Timeline.Body className="text-dark dark:text-light">
            <p>{experience.resume}</p>
            {experience.work && (
              <div>
                <p className="italic">
                  Technologies utilisées : {experience.stack}
                </p>
                <p className="text-sm">{experience.info}</p>
              </div>
            )}
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default CustomExperience;
