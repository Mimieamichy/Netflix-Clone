import React from 'react'
import "./button.css"

export default function Button({children,padding, size}) {
  return (
    <button className='btn' style={{
      padding: padding,
      fontSize: size
    }}>
      {children}

    </button>
  )
}
