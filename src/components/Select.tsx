import { useId } from "react"

export default function Select({
  label,
  options=[],
  className='',
  ...props
}) {

  const id: string = useId();

  return (
    <div className='w-full flex flex-col mb-4'>
      {label && <label htmlFor={id}>{label}</label>}
      <select name="status">
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
