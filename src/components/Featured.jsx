import React from 'react'
import { FEATURED_LIST } from '../utils/helper'

function Featured() {
    return (
        <div>
            <div>
                <p className='text-center text-custom-sm mb-12'>Featured in</p>
            </div>
            <div className='overflow-x-scroll  mb-[70px]'>
            <div className='flex w-[1025px] mx-auto  gap-[123px] px-4 mb-2'>
                {FEATURED_LIST.map((item, index) => (
                    <div key={index}>
                        <img className='h-9 pointer-events-none' src={item.image} alt={item.imageName} />
                    </div>
                ))}
            </div>
            </div>
            <img className='-mb-1 w-full' src="/assets/images/green-line-1.webp" alt="green line 1"/>
            <img className='w-full' src="/assets/images/green-line-2.webp" alt="green line 1"/>
        </div>
    )
}

export default Featured