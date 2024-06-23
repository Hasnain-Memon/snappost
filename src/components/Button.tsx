

export default function Button({
    type = "button",
    children,
    className="",
    ...props
}) {
  return (
    <button {...props} type={type} className={`text-white bg-gray-500 px-4 py-2 rounded-md font-bold ${className}`}>{children}</button>
  )
}