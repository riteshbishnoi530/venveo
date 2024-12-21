import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className='bg-hero-image max-md:bg-hero-image-small bg-top bg-[length:100%_75%] bg-no-repeat mb-20 max-w-[1920px] mx-auto'>
      <Header />
      <div className='px-4 max-sm:px-2 pt-10 max-lg:pt-14 max-sm:pt-11'>
        <h1 className='text-custom-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl font-sohne text-center font-bold uppercase leading-[86%] text-white'>Make marketing <br />a <span className='relative font-sohne'>growth <img className='absolute left-2 max-md:max-w-[150px] max-sm:max-w-[130px]' src="/assets/image/green-line.webp" alt="green line" /></span> machine</h1>
        <p className='max-w-[656px] max-lg:px-2 text-center text-2xl max-sm:text-custom-xl font-light mx-auto text-white mt-3'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
        <form className='py-[22px] px-[34px] border-2 border-white rounded-[50px] max-w-[448px] flex justify-between gap-5 mx-auto mt-[34px] max-sm:mt-[30px]'>
          <input className='bg-transparent text-white placeholder:text-off-white outline-none w-full' type="text" placeholder='Enter Your Website' required />
          <button className='bg-transparent font-semibold text-custom-sm text-white'>Analyze</button>
        </form>
        </div>
        <div className='relative'>
        <img className='max-md:hidden px-4 max-w-[924px] w-full mx-auto mt-[66px] max-sm:mt-12' src="/assets/image/hero-overlapping.webp" alt="img" />
        <img className='absolute -z-10 top-1/2' src="/assets/image/background-squiggle.webp" alt="" />
        </div>
        <img className='md:hidden mt-[66px] px-4 max-sm:mt-12' src="/assets/image/hero-overlapping-small.webp" alt="small-screen" />
    </div>
  )
}

export default Hero