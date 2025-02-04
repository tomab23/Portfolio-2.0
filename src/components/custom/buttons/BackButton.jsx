import { Button } from "flowbite-react";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router"


const BackButton = () => {

    const navigate = useNavigate();

  return (
    <Button size="xs" className="w-[5rem] ml-4 max-sm:ml-2 mt-2" onClick={() => navigate(-1)}>
        <ArrowBigLeft />
    </Button>
  )
}

export default BackButton