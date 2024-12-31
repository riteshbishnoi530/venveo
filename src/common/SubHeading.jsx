import React from 'react'

function SubHeading(props) {
  return (
    <h3 className={`text-center text-[30px] leading-[30px] max-md:text-2xl text-black max-sm:max-w-[250px] mx-auto ${props.className}`}>{props.heading}</h3>
  )
}

export default SubHeading