import BackButton from "../components/custom/buttons/BackButton"
import CustomTitle from "../components/custom/CustomTitle"
import Header from "../components/layout/Header"


const ProjectsPage = () => {
  return (
    <div>
        <Header />
        <BackButton />
        <CustomTitle className={"text-center"}>
            MES PROJETS
        </CustomTitle>
    </div>
  )
}

export default ProjectsPage