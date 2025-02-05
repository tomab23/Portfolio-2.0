import { Timeline } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { CalendarDays } from "lucide-react";

const CustomExperience = ({ children, date, title, latest }) => {
  const { t } = useTranslation();

  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point
          icon={CalendarDays}
          theme={{
            marker: {
              icon: {
                base: "h-4 w-4 text-cyan-700 dark:text-cyan-200",
                wrapper:
                  "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900",
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Title>
            {title}
            {latest && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                {/* {t("experience.latest")} */}
                derniere exp
              </span>
            )}
          </Timeline.Title>
          <Timeline.Time>{date}</Timeline.Time>
          <Timeline.Body>{children}</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default CustomExperience;
