import React from 'react';
import { CLIENTS_CARDS } from '../utils/helper';
import { BtnArrow } from '../utils/icons';
import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';

const ClientsCard = () => {
    return (
        <div className="mt-[101px]  max-xl:mt-24 max-lg:mt-20 max-md:mt-10">
            <SubHeading heading="Driving digital revenue for over"/>
            <div className='relative max-w-[655px] max-sm:max-w-[330px] mx-auto mt-2'>
            <Heading boldHeading="1,400+ satisfied clients."/>
            <img className='max-w-[119px] max-md:max-w-[84px] translate-x-3 absolute top-[74px] max-md:top-[57px] max-sm:translate-x-2 max-md:translate-x-24' src="/assets/images/red-line.webp" alt="red line" />
            </div>

            <div className="flex flex-wrap justify-between gap-6 max-xl:justify-center max-xl:gap-6 mt-[90px] max-lg:mt-16 max-md:mt-14 max-sm:mt-12 max-lg:mx-4  max-w-[1920px] mx-auto">
                {CLIENTS_CARDS.map((obj, i) => (
                    <div
                        key={i} className={`bg-no-repeat bg-center relative bg-cover max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col !w-[440px] max-sm:w-[320px] ${i === 1 ? "bg-client-card-2" : i === 2 ? "bg-client-card-3" : "bg-client-card-1"}`}>
                        <div className='flex flex-col bg-white w-[382px] max-sm:w-[320px] rounded-[25px] shadow-lg px-7 pt-[38px] max-sm:m-4 pb-[31px] mx-7 mt-[31px]'>
                            <div className={i === 0 ? "absolute  bg-black text-white font-semibold text-[12px] border border-solid rounded-full w-[165px] py-2 top-3 ps-3 border-black" : i === 1 ? "absolute top-5 text-black font-semibold text-customsm" : ""}>{obj.heading}</div>

                        <div>{obj.logo}</div>
                        <h3 className="font-light text-[30px] leading-[30px] max-sm:text-2xl max-w-[325px] text-black mt-6 max-sm:mt-4">
                            {obj.title}
                        </h3>
                        <p className="max-w-[315px] font-normal space-mono text-custom-sm text-black max-sm:pt-5 pt-6">
                            {obj.description}
                        </p>
                        <button className="w-fit mt-[54px] hover:gap-4 transition-all ease-in-out duration-300 max-md:mt-9 max-sm:mt-7 font-semibold text-custom-sm flex items-center gap-2">
                            {obj.btn} <BtnArrow/>
                        </button>
                        </div>
                        <div className="flex items-center justify-center gap-12 mt-[13px] mb-[33px]">
                            <div>
                                <p className="text-[50px] font-bold max-lg:text-4xl max-md:text-3xl font-sohne text-black leading-[44px]">{obj.leads}</p>
                                <p className="font-medium text-custom-sm text-black leading-[15px]">{obj.leadText}</p>
                            </div>
                            <div>
                                <p className="text-[50px] max-lg:text-4xl max-md:text-3xl font-bold font-sohne text-black leading-[44px]">{obj.adLeads}</p>
                                <p className="font-medium text-custom-sm text-black leading-[15px]">{obj.adLeadsText}</p>
                            </div>
                            <div>
                                <p className="text-[50px] max-lg:text-4xl max-md:text-3xl font-bold font-sohne text-black leading-[44px]">
                                    {obj.webTraffic}
                                </p>
                                <p className="font-medium text-custom-sm text-black leading-[15px]">{obj.webTrafficText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsCard;