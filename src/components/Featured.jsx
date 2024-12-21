import React from 'react'
import { FEATURED_LIST } from '../utils/helper'

function Featured() {
  return (
    <div className='flex'>
        {FEATURED_LIST.map((item, index) => (
                                    <div key={index}>
                                        <img className='h-9' src={item.image} alt="" />
                                        </div>
        ))}
    </div>
  )
}

export default Featured