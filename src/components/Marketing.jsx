import React from 'react';
import { MARKETING_LIST } from '../utils/helper';
import { BtnArrow } from '../utils/icons';
import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';

const Marketing = () => {
    return (
        <div className="pt-[132px] pb-[129px] max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-10 relative">
            <SubHeading heading="Problems we solve." />
            <div className="max-w-[552px] mx-auto">
                <Heading boldHeading="Digital Marketing for today’s Business" />
            </div>
            <p className="font-normal text-custom-sm px-4 uppercase text-center max-w-[614px] leading-[20px] pt-6 text-black mx-auto tracking-[1px]">
                We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.
            </p>
            <img
                src="/assets/images/yello-line.webp"
                alt="yellow-line"
                className="w-full absolute -z-10 translate-y-[6rem]"
            />
            <div className="flex flex-wrap gap-[66px] max-md:gap-6 justify-center pt-10 max-sm:pt-[33px] px-4 max-w-[1920px] mx-auto">
                {MARKETING_LIST.map((obj, i) => (
                    <div
                        key={i}
                        className="border-2 relative z-40 max-w-[502px] bg-white border-solid border-[#00AFB5] rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] w-[calc(50%-12px)] max-lg:w-full"
                    >
                        <div className="flex items-start gap-6 max-sm:flex-col">
                            <p>{obj.logo}</p>
                            <div>
                                <h3 className="text-black font-light text-[30px] leading-[30px] max-w-[325px]">{obj.title}</h3>
                                <p className="text-black font-normal max-w-[315px] tracking-[2px] pt-5 leading-[20px] text-custom-sm">{obj.description}</p>
                                <ul className="list-disc pl-5 mt-7 max-w-[285px]">
                                    <li className='font-semibold text-black leading-[20px] text-custom-sm'>{obj.listOne}</li>
                                    <li className='font-semibold text-black leading-[20px] text-custom-sm'>{obj.listTwo}</li>
                                    <li className='font-semibold text-black leading-[20px] text-custom-sm'>{obj.listThree}</li>
                                </ul>
                                <button className="mt-[52px] flex items-center gap-2 max-md:mt-8 max-sm:mt-6 text-custom-sm font-semibold leading-[20px]">
                                    {obj.btn} <BtnArrow/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketing;