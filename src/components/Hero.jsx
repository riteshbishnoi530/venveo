import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className='mb-80 max-md:mb-0'>
      <div className='md:bg-off-green pb-72 max-lg:pb-60 max-md:pb-20 max-sm:pb-8'>
        <div className='relative max-w-[1920px] max-md:bg-hero-image-small bg-top bg-[length:100%_75%] bg-no-repeat mx-auto'>
          <img className='absolute max-w-[340px] max-lg:max-w-[300px] max-md:hidden top-0 left-0' src="/assets/images/hero-left-layer.webp" alt="left-layer" />
          <img className='absolute max-w-[340px] bottom-0 right-0 max-lg:hidden' src="/assets/images/hero-bottom-layer.webp" alt="left-layer" />

          <Header />
          <div className='px-4 max-sm:px-2 pt-10 max-lg:pt-14 max-sm:pt-11 z-[1] relative'>
            <h1 className='text-custom-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl font-sohne text-center font-bold uppercase leading-[86%] text-white'>Make marketing <br />a <span className='relative font-sohne'>growth <img className='absolute left-2 max-md:max-w-[150px] max-sm:max-w-[130px]' src="/assets/images/green-line.webp" alt="green line" /></span> machine</h1>
            <p className='max-w-[656px] max-lg:px-2 text-center text-2xl max-sm:text-custom-xl font-light mx-auto text-white mt-5'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
            <form className='py-[18.5px] px-[34px] border-2 border-white rounded-[50px] max-w-[448px] flex justify-between gap-5 mx-auto mt-[34px] max-sm:mt-[30px]'>
              <input className='bg-transparent text-white placeholder:text-off-white outline-none w-full' type="text" placeholder='Enter Your Website' required />
              <button className='bg-transparent font-semibold text-custom-sm text-white'>Analyze</button>
            </form>
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 max-w-[924px] w-full'>
            <img className='max-md:hidden px-4 max-w-[924px] w-full mx-auto mt-[66px] max-sm:mt-12' src="/assets/images/hero-overlapping.webp" alt="img" />

          </div>
          <img className='md:hidden mt-[66px] px-4 max-sm:mt-12' src="/assets/images/hero-overlapping-small.webp" alt="small-screen" />
        </div>
      </div>
      <img className='mt-5 max-md:hidden w-full' src="/assets/images/background-squiggle.webp" alt="bg-line" />
    </div>
  )
}

export default Hero