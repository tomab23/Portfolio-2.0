import BackButton from "../components/custom/buttons/BackButton"
import CustomTitle from "../components/custom/CustomTitle"
import Header from "../components/layout/Header"


const ListProjectsPage = () => {
  return (
    <div>
        <Header />
        <BackButton />
        <CustomTitle className={"text-center"}>
            MES PROJETS (0)
        </CustomTitle>
    </div>
  )
}

export default ListProjectsPage