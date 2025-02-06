import BackButton from "../components/custom/buttons/BackButton"
import CustomTitle from "../components/custom/CustomTitle"
import Header from "../components/layout/Header"


const ProjectPage = () => {
  return (
    <div className="h-[100vh]">
                <Header />
        <div className="flex items-center justify-between mr-6 max-sm:mr-4">
        <BackButton />
        <CustomTitle className={"text-center"}>
            Mon projet
        </CustomTitle>
        </div>
    </div>
  )
}

export default ProjectPage