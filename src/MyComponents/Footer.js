import React from 'react'

export const Footer = () => {
  let footerstyle ={
    position : "relative",
    top: "100vh",
    width:"100%"

  }
  return (
    <div className="bg-dark text-light" style={footerstyle}>
      <p className="text-center">
      Footer works
      </p>
    </div>
  )
}

export default Footer 
