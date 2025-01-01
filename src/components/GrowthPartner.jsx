import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';
import { BlackArrow, LogoIpsum, PodcastIcon } from '../utils/icons';

const GrowthPartner = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const tabNames = ['Industry Expertise', 'ROI Focused', 'Proprietary Technology'];

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        const tabIndex = tabNames.findIndex((name) => name === tabParam);
        if (tabIndex >= 0) {
            setActiveTab(tabIndex + 1);
        }
    }, [searchParams]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setSearchParams({ tab: tabNames[tabIndex - 1].toLowerCase().replace(/\s+/g, '-') });
    };

    const renderTabContent = () => {
        if (activeTab === 1) {
            return (
                <div className='bg-cover bg-no-repeat bg-center lg:bg-industry-expertise max-lg:bg-tab-one-card w-full max-w-[1280px] max-lg:h-full h-[720px] mx-auto'>
                    <div className='pt-[75px] max-lg:pt-12 max-md:pt-8 max-sm:pt-5 max-sm:pb-0 max-sm:-mb-4'>
                        <h3 className='text-white font-bold text-custom-3xl uppercase max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px] max-w-[415px]'>
                            The smartest minds in the industry
                        </h3>
                        <p className='max-w-[360px] font-light text-3xl max-md:text-2xl text-white leading-[30px]'>
                            Answer our questions and listen to our answers.
                        </p>
                        <p className='max-w-[360px] mt-[31px] font-normal text-custom-sm font-sohne leading-[20px] text-white'>
                            This is placeholder but can add more to the business of building, some epic fails (and how to avoid them) and everything building science.
                        </p>
                        <button className='flex items-center bg-red-700 gap-[10px] mt-[98px] p-[31px] font-semibold text-custom-sm text-white'>
                            <PodcastIcon />Subscribe to Podcast ▼
                        </button>
                        <div>
                            <div className='overflow-x-auto overflow-hidden mt-6'>
                                <div className='w-[700px] mx-auto max-lg:w-[600px]'>
                                    <img src="/assets/images/patners-logo-img.webp" alt="logo" className='w-full lg:hidden mx-auto overflow-x-auto' />
                                </div>
                            </div>
                            <img src="/assets/images/tab-one-card.webp" alt="card" className='lg:hidden max-w-[332px] mx-auto' />
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === 2) {
            return (
                <div className='bg-cover bg-no-repeat bg-center bg-tab-two max-lg:bg-tab-two-sm w-full max-w-[1337px] max-lg:h-full h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[89px] max-lg:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white font-bold text-custom-2xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px]'>
                            Proven Results
                        </h3>
                        <p className='max-w-[360px] font-light text-custom3xl max-md:text-2xl max-lg:pb-7 text-white leading-[30px]'>
                            Not hopes and prayers.
                        </p>
                        <img src="/assets/images/data-group.webp" alt="data" className='lg:hidden mx-auto' />
                    </div>
                </div>
            );
        }

        if (activeTab === 3) {
            return (
                <div className='lg:bg-tab-three max-lg:bg-tab-three-sm max-lg:h-full bg-cover bg-center bg-no-repeat w-full max-w-[1337px] pb-[75px] mx-auto'>
                    <div className='pt-[75px] ps-[79px] max-lg:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white uppercase font-bold text-custom-3xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px]'>
                            Project Radar
                        </h3>
                        <LogoIpsum />
                        <p className='pt-[162px] max-xl:pt-24 max-lg:pt-16 max-md:pt-11 max-sm:pt-8 max-w-[360px] font-light text-custom3xl max-md:text-2xl text-white leading-[30px]'>
                            Lorem ipsum what this product actually does.
                        </p>
                        <p className='font-normal text-custom-sm leading-[20px] text-white space-mono max-w-[360px] max-lg:max-w-[600px] mt-[14px]'>
                            This is placeholder but can add more to the business of building, some epic fails (and how to avoid them) and everything building science.
                        </p>
                        <button className='flex items-center bg-lime-green gap-[10px] mt-11 px-9 py-7 font-semibold text-custom-sm text-black'>
                            Call to Action Somewhere<BlackArrow />
                        </button>
                        <img src="/assets/images/card-data-img.webp" alt="card-data" className='lg:hidden mx-auto mt-20' />
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className='pt-[113px] max-lg:pt-[60px] max-md:pb-9 pb-[60px]'>
            <Heading boldHeading="The growth partner " />
            <SubHeading heading='you’ve been looking for.' />
            <p className='mt-[43px] font-normal text-custom-sm text-black leading-[20px] space-mono text-center'>
                Businesses trust Venveo to power grow.
            </p>

            <div className='tabs-parent mt-[105px] relative z-20'>
                <div className='overflow-x-auto h-10 mb-10'>
                    <div className='relative flex items-center justify-center gap-[78px] w-[600px] mx-auto'>
                        {tabNames.map((tabName, index) => (
                            <p
                                key={index}
                                onClick={() => handleTabClick(index + 1)}
                                className={`text-lg font-semibold text-black opacity-35 leading-[18px] cursor-pointer ${activeTab === index + 1 ? 'text-black !opacity-100' : ''
                                    }`}
                            >
                                {tabName}
                                {activeTab === index + 1 && (
                                    <img
                                        src="/assets/images/red-line.webp"
                                        alt="redline"
                                        style={{
                                            maxWidth:
                                                activeTab === 3 ? '183px' :
                                                    activeTab === 2 ? '100px' :
                                                        '155px',
                                            width: '100%'
                                        }} className="mx-auto absolute w-full"
                                    />
                                )}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='mt-[57px]'>{renderTabContent()}</div>
            </div>
            <div className='max-md:mt-10'>
                <img src="/assets/images/tab-bg-line.webp" alt="line" className='w-full absolute z-0 -translate-y-5' />
                <img src="/assets/images/tab-img-bottom-line.webp" alt="line" className='w-full mt-2' />
            </div>
        </div>
    );
};

export default GrowthPartner;
