

const CustomTitle = ({ children, className }) => {
  return (
    <div>
      <h1 className={`font-extrabold leading-none tracking-tight text-gray-900  dark:text-white ${className}`}>
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          {/* title */}
          {children}
        </span>
      </h1>
    </div>
  )
}

export default CustomTitle