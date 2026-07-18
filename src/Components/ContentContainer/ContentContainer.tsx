import React from 'react'

type ContainerProp= {

    className?: string;
    style?: React.CSSProperties;
    children:React.ReactNode
}

export const ContentContainer = ({className,style,children}: ContainerProp) => {
  return (
    <div  className={className} style={{maxWidth:1200,padding:5, margin:"0 auto"}}>
        {children}
    </div>
  )
}


export default ContentContainer
