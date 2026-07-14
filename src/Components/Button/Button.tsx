import React from 'react'


type ButtonProp= {
    className?: string;
    value?: string
}
export const Button = ({className,value}: ButtonProp) => {


  return (
     <>
     <button className={className} value={value}></button>
     
     </>
  )
}

export default Button
