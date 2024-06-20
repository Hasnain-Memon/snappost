import React from 'react'

const Input = React.forwardRef(function Input({
    label,
    className='',
    type="text",
    ...props
}, ref){
    
    const id = React.useId();

    return (
        <div className='flex flex-col'>
            {label && <label htmlFor={id} className='inline-block font-medium' >{label}</label>}
            <input type={type} id={id} {...props} className={`w-[20vw] focus:bg-gray-200 h-8 rounded-sm px-2 outline-none  ${className}`} ref={ref} />
        </div>
    )

})

export default Input;