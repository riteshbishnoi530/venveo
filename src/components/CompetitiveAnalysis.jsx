import React from 'react'
import { ArrowLine, SmallArrowLine } from '../utils/icons'

function CompetitiveAnalysis() {
    return (
        <div className='px-4 relative bg-competitive-analysis bg-no-repeat bg-cover bg-center pt-[60px] pb-20'>
            <div className='max-w-[1092px] mx-auto flex max-lg:flex-col max-lg:items-center justify-between'>
                <div>
                    <p className='max-lg:hidden text-black text-custom-sm space-mono'>Get a free competitive analysis on your market</p>
                    <p className='lg:hidden text-black text-custom-sm space-mono'>Get Your Custom Marketing Plan</p>
                    <p className='max-lg:hidden text-black text-custom-2xl font-light'>Outsmart your competition</p>
                    <p className='lg:hidden text-black text-custom-2xl font-light'>Start earning more money now</p>
                </div>
                <div className='max-lg:hidden absolute arrow-rotate left-[48%] top-[50%]'>
                    <ArrowLine/>
                </div>
                <div className='lg:hidden absolute arrow-rotate left-[60%] top-[32%] max-[570px]:top-[40%]'>
                    <SmallArrowLine/>
                </div>
                <form className='py-[18.5px] max-lg:mt-[76px] px-[34px] rounded-[50px] max-w-[446px] w-full flex justify-between gap-5 mt-[34px] bg-white'>
                    <input className='bg-transparent text-black placeholder:text-black outline-none w-full' type="text" placeholder='Enter Your Website' required />
                    <button className='max-lg:hidden bg-transparent font-semibold text-custom-sm text-black'>Analyze</button>
                    <button className='lg:hidden bg-transparent font-semibold text-custom-sm text-black'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CompetitiveAnalysis