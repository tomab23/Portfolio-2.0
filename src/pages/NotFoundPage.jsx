import { Button } from "flowbite-react"
import { useNavigate } from "react-router"
import Header from "../components/layout/Header";
import { useTranslation } from "react-i18next";


const NotFoundPage = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div className=" dark:bg-dark bg-light h-[100vh]">
        <Header />
        
        <div className="flex flex-col items-center justify-center h-[85%]  gap-10">
        <h1 className="dark:text-light uppercase font-devgothic text-3xl">{t("NOTFOUND.TEXT")}</h1>
        <Button onClick={() => navigate(-1)}>{t("NOTFOUND.BUTTON")}</Button>
        </div>
    </div>
  )
}

export default NotFoundPage
