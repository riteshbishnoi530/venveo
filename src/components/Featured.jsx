import React from 'react'
import { FEATURED_LIST } from '../utils/helper'

function Featured() {
    return (
        <div>
            <div>
                <p className='text-center text-custom-sm mb-12 max-md:mb-5 space-mono'>Featured in</p>
            </div>
            <div className='overflow-hidden'>
                <div className='flex slide-scroll-left gap-[123px] w-[1024px]  mx-auto max-md:gap-16 px-4 mb-[74px] max-md:mb-12 max-sm:mb-9'>
                    {FEATURED_LIST.map((item, index) => (
                        <div key={index}>
                            <img className='h-9 max-sm:h-5 pointer-events-none' src={item.image} alt={item.imageName} />
                        </div>
                    ))}
                </div>
            </div>
            <img className='-mb-1 w-full' src="/assets/images/green-line-1.webp" alt="green line 1" />
            <img className='w-full' src="/assets/images/green-line-2.webp" alt="green line 1" />
        </div>
    )
}

export default Featured