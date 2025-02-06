import CustomLinkButton from "../custom/buttons/CustomLinkButton"
import CustomTitle from "../custom/CustomTitle"
import CardProject from "./CardProject"


const LastProjects = () => {
  return (
    <div id="projects" className="flex flex-col gap-5">
      <CustomTitle className={"title"}>
        Derniers projets
      </CustomTitle>

{/* LAST PROJECTS */}
      <div className="flex flex-wrap gap-5">
      <CardProject />
      <CardProject />
      <CardProject />
      </div>

      <CustomLinkButton title={"Voir tout mes projets"} page={"projets"} classname={"self-start"} />
    </div>
  )
}

export default LastProjects