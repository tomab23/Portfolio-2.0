import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const ScrollToTop = () => {

  const { t } = useTranslation();

  const [view, setView] = useState(false)

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 10) {
              setView(true);
          } else {
              setView(false);
          }
      });
  }, []);

  return (
    <div>
      {view &&
                <button
                className="fixed z-50 bottom-6 right-6 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow"
                // max-md:bottom-20
                onClick={toTop}
              >
                {t("TOTOP")}
              </button>
      }
    </div>
  )
}

export default ScrollToTop