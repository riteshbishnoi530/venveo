import React from 'react'

function Heading({boldHeading}) {
  return (
    <h2 className={`text-[80px] max-md:text-6xl uppercase font-sohne text-black font-bold text-center leading-[70px]`}>{boldHeading}</h2>
  )
}

export default Heading