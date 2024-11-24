import React,{forwardRef, useId} from 'react'

const TextArea = forwardRef(function TextArea({label,type='text',className,...props},ref) {
    const id = useId();
    return(
        <div>
            {label && <label
             key={id}
             className='inline-block mb-1 pl-1'
             htmlFor={id}
             > {label} </label> }
             
            <textarea className={`textarea-field w-full h-48 rounded-xl focus:bg-gray-50 border border-gray-200 ${className}`}
                      ref={ref}
                      id = {id}
                      {...props}>

            </textarea>
        </div>
    )
  });

export default TextArea

// import React, { useId } from "react";

// const TextArea = React.forwardRef(function TextArea({
//     label,
//     type = 'text',
//     className = "",
//     ...props
// },ref){

//     const id = useId()

//     return(
//         <div className="w-full">
//             {label && <label key={id}
//             className='inline-block mb-1 pl-1'
//             htmlFor={id} >{label}
//             </label>}
//             <textarea 
//             type={type}
//             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//             ref={ref}
//             {...props}
//             id = {id} />
//         </div>
//     )

// });

// export default TextArea;
