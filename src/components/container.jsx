
import React from 'react'

const Container = ({children , className}) => {
  return (
      <div className={`max-w-7xl xl:mx-auto mx-4 ${className}`}>
          
      {children}
    </div>
  )
}

export default Container;
