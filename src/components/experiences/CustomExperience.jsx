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
            <div className="flex items-center max-sm:flex-wrap sm:gap-3">
              {/* TITLE & ENTREPRISE */}
              {experience.title} | {experience.entreprise}
              {/* BADGE */}
              {experience.id === lastId && experience.status === "finish" && (
                <span className="bg-blue-100 text-blue-800 text-sm max-sm:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {t("EXP.LATEST")}
                </span>
              )}
              {experience.id === lastId && experience.status === "soon" && (
                <span className="bg-green-100 text-green-800 text-sm max-sm:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  {t("EXP.SOON")}
                </span>
              )}
              {experience.status === "now" && (
                <span className="bg-yellow-100 text-yellow-800 text-sm max-sm:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 ">
                  {t("EXP.NOW")}
                </span>
              )}
            </div>
          </Timeline.Title>
          <Timeline.Time className="text-dark-ligh dark:text-gray-200">
            {experience.date}
          </Timeline.Time>
          <Timeline.Body className="text-dark dark:text-light">
            <p>{experience.resume}</p>
            {experience.work && (
              <div>
                <p className="italic">
                  {t("EXP.TECH")} : {experience.stack}
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
