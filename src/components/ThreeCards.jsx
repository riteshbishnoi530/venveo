
import React, { useState } from 'react';
import { CARDS_LIST } from '../utils/helper';
import { BtnArrow } from '../utils/icons';


const ThreeCards = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore((prev) => !prev);


    const displayedCards = showMore ? CARDS_LIST : CARDS_LIST.slice(0, 1);

    return (
        <div className='py-[60px] max-w-[1440px] mx-auto max-lg:pt-10 max-md:pt-6 max-sm:pt-4'>
            <div className='flex w-full justify-between max-xl:justify-center max-xl:flex-col max-xl:items-center max-xl:gap-7 max-xl:hidden'>
                {CARDS_LIST.map((obj, i) => (
                    <div
                        key={i}
                        className={`bg-cover bg-no-repeat min-h-[551px] w-full max-w-[440px] p-7 flex items-end justify-center ${i === 0 ? 'bg-card-one' : i === 1 ? 'bg-card-two' : 'bg-card-three'
                            }`}
                    >
                        <div className='bg-white p-7 pt-9 w-full rounded-3xl'>
                            <p className='text-custom-sm  uppercase leading-[15px] text-[#00AFB5] pb-[15px]'>
                                {obj.heading}
                            </p>
                            <p className='text-3xl font-light  max-w-[320px] leading-[30px] pb-[15px]'>
                                {obj.subHeading}
                            </p>
                            <p className='text-custom-sm leading-5 font-normal space-mono'>
                                {obj.description}
                            </p>
                            <button
                                className={`flex items-center text-custom-sm gap-1.5 leading-custom-xl hover:gap-4 duration-300 ease-linear ${i === 0 ? 'pt-[83.91px]' : 'pt-11'
                                    }`}
                            >
                                {obj.button} <BtnArrow />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex gap-3 items-center justify-center flex-wrap flex-col xl:hidden'>
                {displayedCards.map((obj, i) => (
                    <div
                        key={i}
                        className={`bg-cover bg-no-repeat  min-h-[500px] max-sm:min-h-[240px] w-full max-w-[560px] max-sm:max-w-[360px] flex items-end justify-end pr-0 pl-28 pt-5 pb-4 ${i === 0 ? 'bg-card-one' : i === 1 ? 'bg-card-two' : 'bg-card-three'
                            }`}
                    >
                        <div className='bg-white p-6 w-full rounded-l-3xl'>
                            <p className='text-custom-sm uppercase text-off-green pb-[15px]'>
                                {obj.heading}
                            </p>
                            <p className='text-2xl font-light space-mono leading-custom-xs max-w-[320px] max-sm:max-w-[201px] pb-[15px]'>
                                {obj.subHeading}
                            </p>
                            <button
                                className='flex items-center text-custom-sm gap-1.5 leading-5 hover:gap-4 duration-300 ease-linear pt-5'
                            >
                                {obj.button} <BtnArrow />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className='text-xl text-center flex items-center justify-center w-full mx-auto gap-2 text-custom-sm leading-5 pt-9 xl:hidden'
                onClick={toggleShowMore}
            >
                {showMore ? 'Less More Resources' : 'Show More Resources'}
                <span className={`${showMore ? 'rotate-180' : ''} duration-300 ease-linear`}>▼</span>
            </button>
        </div>
    );
};

export default ThreeCards;
