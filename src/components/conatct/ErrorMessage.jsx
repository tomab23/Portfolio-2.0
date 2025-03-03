
const ErrorMessage = ({formik, errors}) => {

  return (
    <p className="text-red-500 text-xs absolute max-sm:mt-1">
    {formik.errors && errors}
  </p>
  )
}

export default ErrorMessage