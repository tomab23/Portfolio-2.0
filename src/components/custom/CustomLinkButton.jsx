import { Button } from "flowbite-react"
import { useNavigate } from "react-router"

const CustomLinkButton = ({ title, link, page, classname }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            window.open(`${page}`)
        } else  {
            navigate(`/${page}`)
        }
    }

  return (
    <Button size="sm" className={`${classname}`} onClick={handleClick}>
        {title}
    </Button>
  )
}

export default CustomLinkButton