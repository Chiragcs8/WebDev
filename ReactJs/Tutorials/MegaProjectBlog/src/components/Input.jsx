import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    classname = "",
    ...props
}, ref){
    return (
        <div className='w-full'>
            {label && <label className='block mb-1' htmlFor={props.id}>{label}
                </label>}
        </div>
    )
})

export default Input