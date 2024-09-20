import React from 'react'
import { Header } from '../../../Components'
import { RoadmapHorizontalLine, RoadmapLine, RoadmapRectangle } from '../../../../Assets'
import '../../../../App.css'

export default function Roadmap() {
    return (
        <main className='bg-darkShadeA'>
            <Header />

            {/* Roadmap */}
            <section className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:pt-40">
                <div className='flex justify-center items-center lg:py-20 py-10'>
                    <h1 className='lg:text-4xl text-xl text-yellowShade font-bold'>Our Roadmap</h1>
                </div>
                <div className="flex lg:gap-10 gap-1">
                    <div className='border border-darkShadeB overflow-y-hidden px-2 lg:w-16 w-10 lg:h-[120vh] h-[90vh] flex justify-center items-center rounded-lg'>
                        <img src={RoadmapLine} className='w-[1px] h-full' />
                    </div>
                    <div className='lg:pt-10 pt-5 flex flex-col'>
                        <div className="flex">
                            <div className='flex items-start lg:gap-10 gap-3'>
                                {/* image */}
                                <div className='flex justify-start items-center gap-2 hidden'>
                                    <img src={RoadmapRectangle} className='lg:w-[38px] w-[20px] h-auto' />
                                    <div className='border border-darkShadeB lg:py-4 lg:px-0 py-2 px-0 rounded-sm'>
                                        <img src={RoadmapHorizontalLine} className='lg:w-30 w-60 h-[1px]' />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="pb-8 roadmap ml-3">
                                    <p className="mb-2 lg:text-3xl text-sm font-bold text-yellowShade">Phase 1</p>
                                    <ul className='list-disc pl-6'>
                                        <li className='text-white lg:text-lg text-xs'>In-Depth Research and Analysis.</li>
                                        <li className='text-white lg:text-lg text-xs'>Release Comprehensive Litepaper (Version 1).</li>
                                        <li className='text-white lg:text-lg text-xs'>Organise Expert Building Team.</li>
                                        <li className='text-white lg:text-lg text-xs'>Launch Informative Website.</li>
                                        <li className='text-white lg:text-lg text-xs'>Design and Develop User-Focused dApps Frontend for GATAMARKET & GATANow.</li>
                                        <li className='text-white lg:text-lg text-xs'>Organise and Foster Community Engagement.</li>
                                        <li className='text-white lg:text-lg text-xs'>Release Enhanced Litepaper (Version 2).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='flex items-start gap-2'>
                                {/* image */}
                                <div className='flex justify-start items-center gap-0 mt-12'>
                                    <img src={RoadmapRectangle} className='w-[30px] h-auto' />
                                    <div className='border border-darkShadeB py-3 rounded-sm'>
                                        <img src={RoadmapHorizontalLine} className='w-full h-[1px]' />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="pb-8 roadmap ml-3">
                                    <p className="mb-2 lg:text-3xl text-sm font-bold text-yellowShade">Phase 2</p>
                                    <ul className='list-disc pl-6'>
                                        <li className='text-white lg:text-lg text-xs'>Develop the dApps Smart Contracts for GATAMARKET & GATANow.</li>
                                        <li className='text-white lg:text-lg text-xs'>Deploy GATA Token Smart Contract.</li>
                                        <li className='text-white lg:text-lg text-xs'>List GATA Tokens on Initial Decentralized Exchanges (DEXs)</li>
                                        <li className='text-white lg:text-lg text-xs'>Platinum (TBA)</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="flex">
                            <div className='flex items-start gap-10'>
                                {/* image */}
                                <div className='flex justify-start items-center gap-2 hidden'>
                                    <img src={RoadmapRectangle} className='w-[38px] h-auto' />
                                    <div className='border border-darkShadeB p-4 rounded-sm'>
                                        <img src={RoadmapHorizontalLine} className='w-30 h-[1px]' />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="pb-8 roadmap ml-3">
                                    <p className="mb-2 lg:text-3xl text-sm font-bold text-yellowShade">Phase 3</p>
                                    <ul className='list-disc pl-6'>
                                        <li className='text-white lg:text-lg text-xs'>Mint GATA Membership NFTs</li>
                                        <li className='text-white lg:text-lg text-xs'>Deploy dApps Smart Contracts for GATAMARKET & GATANow.</li>
                                        <li className='text-white lg:text-lg text-xs'>Establish Community Multi-Sig Wallet</li>
                                        <li className='text-white lg:text-lg text-xs'>Launch MVP Beta Test</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="flex">
                            <div className='flex items-start gap-10'>
                                {/* image */}
                                <div className='flex justify-start items-center gap-2 hidden'>
                                    <img src={RoadmapRectangle} className='w-[38px] h-auto' />
                                    <div className='border border-darkShadeB p-4 rounded-sm'>
                                        <img src={RoadmapHorizontalLine} className='w-30 h-[1px]' />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="pb-8 roadmap ml-3">
                                    <p className="mb-2 lg:text-3xl text-sm font-bold text-yellowShade">Phase 4</p>
                                    <ul className='list-disc pl-6'>
                                        <li className='text-white lg:text-lg text-xs'>Conduct Initial Smart Contracts Audits</li>
                                        <li className='text-white lg:text-lg text-xs'>Officially List on Coinmarketcap and Coingecko</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="flex">
                            <div className='flex items-start gap-10'>
                                {/* image */}
                                <div className='flex justify-start items-center gap-2 hidden'>
                                    <img src={RoadmapRectangle} className='w-[38px] h-auto' />
                                    <div className='border border-darkShadeB p-4 rounded-sm'>
                                        <img src={RoadmapHorizontalLine} className='w-30 h-[1px]' />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="pb-8 roadmap ml-3">
                                    <p className="mb-2 lg:text-3xl text-sm font-bold text-yellowShade">Phase 5</p>
                                    <ul className='list-disc pl-6'>
                                        <li className='text-white lg:text-lg text-xs'>Initiate Affiliate Program</li>
                                        <li className='text-white lg:text-lg text-xs'>Undergo Extensive Smart Contracts Audit</li>
                                        <li className='text-white lg:text-lg text-xs'>Expand Token Listings on Additional DEXs</li>
                                        <li className='text-white lg:text-lg text-xs'>Launch Advanced dApps Version 2.0</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="flex">
                            <div className='flex items-start gap-10'>
                                {/* image */}
                                <div className='flex justify-start items-center gap-2 hidden'>
                                    <img src={RoadmapRectangle} className='w-[38px] h-auto' />
                                    <div className='border border-darkShadeB p-4 rounded-sm'>
                                        <img src={RoadmapHorizontalLine} className='w-30 h-[1px]' />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="pb-8 roadmap ml-3">
                                    <p className="mb-2 lg:text-3xl text-sm font-bold text-yellowShade">Phase 6</p>
                                    <ul className='list-disc pl-6'>
                                        <li className='text-white lg:text-lg text-xs'>Initiate Community Governance</li>
                                        <li className='text-white lg:text-lg text-xs'>Release Comprehensive Whitepaper</li>
                                        <li className='text-white lg:text-lg text-xs'>Reevaluate Project and Roadmap</li>
                                        <li className='text-white lg:text-lg text-xs'>Begin Process for Community Data Sales.</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
