import ClipLoader from "react-spinners/ClipLoader";

const LoaderCercle = ({ size }) => {
  return (
    <div>
      <ClipLoader color="#36d7b7" loading={true} size={size} />
    </div>
  )
}

export default LoaderCercle