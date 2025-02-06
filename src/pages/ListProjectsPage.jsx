import BackButton from "../components/custom/buttons/BackButton"
import CustomTitle from "../components/custom/CustomTitle"
import Header from "../components/layout/Header"


const ListProjectsPage = () => {
  return (
    <div className="h-[100vh]">
        <Header />
        <div className="flex items-center justify-between mr-6 max-sm:mr-4">
        <BackButton />
        <CustomTitle className={"text-center"}>
            MES PROJETS (0)
        </CustomTitle>
        </div>
    </div>
  )
}

export default ListProjectsPage