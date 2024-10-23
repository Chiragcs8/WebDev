import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    classname = "",
    ...props
}, ref){
    return (
        <div className='w-full'>
            {label && <label 
            className='block mb-1 pl-1' htmlFor={id}>
                {label}
                </label>}
                <input 
                type={type}
                className={ ` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${classname}`}
                ref={ref} 
                {...props}
                id={id}
                />
        </div>
    )
})

export default Input