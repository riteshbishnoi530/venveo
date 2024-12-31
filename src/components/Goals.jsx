import React from 'react'
import { BlackArrow } from '../utils/icons'

function Goals() {
  return (
    <div className='flex items-center gap-9 justify-center max-md:flex-col bg-goals bg-no-repeat bg-center bg-cover py-[66px] px-4'>
        <p className='text-4xl max-md:text-center max-[500px]:max-w-[200px] text-white'>Ready to hit your goals?</p>
        <button className='flex items-center bg-lime-green gap-[10px] px-[34px] max-md:px-16 max-md:py-[29px] py-7 font-semibold text-custom-sm text-black'>
        Book a Strategy Call<BlackArrow/>
                                </button>
    </div>
  )
}

export default Goals