import React from 'react'
import { BtnArrow } from '../utils/icons'
import { LEARN_LIST } from '../utils/helper'
import Heading from '../common/Heading'

const LearnFrom = () => {
    return (
        <div className='mt-[109px] mb-[59px] max-xl:mt-20 max-md:my-14 max-sm:my-10'>
            <Heading boldHeading='Learn from us.' />
            <p className='text-black  font-normal text-custom-sm text-center leading-[20px]'>Digital marketing resources from Venveo to help you grow.</p>
            <div className='flex items-center justify-center mt-9 max-lg:mt-6 max-sm:mt-5'>
                <button className='bg-transparent text-custom-sm font-semibold text-black flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center'>See All <BtnArrow /></button>
            </div>
            <div className='mt-20 max-xl:mt-16 max-lg:mt-12 max-md:mt-8 max-sm:mt-6'>
                <img
                    src="/assets/images/yellow-line.webp"
                    alt="yellow-line"
                    className="w-full absolute -z-10 translate-y-28" />
                <div className='relative max-w-[1322px] mx-auto w-full'>
                    <img src="/assets/images/learn-from.webp" alt="learn from" className='w-full max-w-[1322px] mx-auto relative max-md:hidden' />
                    <img src="/assets/images/small-learn-more-img.webp" alt="team-work" className='w-full max-w-[1322px] mx-auto relative  md:hidden' />
                    <div className='bg-white border border-solid rounded-3xl px-7 pt-9 pb-8 absolute left-[29px] bottom-[31px] max-sm:left-[19px] max-sm:bottom-[19px] w-full max-w-[382px] max-md:max-w-[339px]'>
                        <div>
                            {LEARN_LIST.map((obj, i) => (
                                <div className='max-w-[320px]' key={i}>
                                    <h4 className='text-custom-sm font-semibold leading-[20px] text-off-green uppercase Light'>{obj.heading}</h4>
                                    <h3 className='text-black font-light text-3xl leading-[30px] max-w-[325px] pt-4 Light'>{obj.subHeading}</h3>
                                    <h3 className='text-black font-light text-3xl leading-[30px] max-w-[325px] Light'>{obj.subHeadingTwo}</h3>
                                    <p className='text-black font-normal text-custom-sm leading-5 max-w-[315px] pt-4 space-mono'>{obj.description}</p>
                                    <button className='bg-transparent text-custom-sm font-semibold text-black mt-[28px] Bold flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center'>{obj.btn}<BtnArrow /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnFrom