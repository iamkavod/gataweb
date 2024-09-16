import React from 'react'
import { Header } from '../../../Components'
import { Engage, Enhance, EventRecaps, GataonUniswap, upcomingEvents } from '../../../../Assets'

export default function LatestNews() {
    return (
        <main className='bg-darkShadeA'>
            <Header />

            <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
                <div>
                    <div className='flex flex-col justify-start gap-5 py-20'>
                        <p className='lg:text-2xl text-xl text-yellowShade font-bold'>Latest News</p>
                        <p className='text-darkShadeB lg:text-lg text-sm'>Stay informed about the latest developments and announcements from the GATA Protocol ecosystem.</p>
                        <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase p-3 rounded-lg'>Announcment</a></div>
                    </div>
                    <div className="flex flex-col gap-10 max-w-[1443px] sm:mx-auto lg:max-w-full">
                        <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
                            <a href="/" aria-label="Article">
                                <img
                                    src={GataonUniswap}
                                    className="object-center w-full h-full rounded"
                                    alt=""
                                />
                            </a>
                            <div className="py-5 flex flex-col gap-2">
                                <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                                    08 Jul, 2024
                                </p>
                                <a
                                    href="/latestnews=1"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200"
                                >
                                    <p className="text-2xl font-bold leading-5 text-white underline">GATA Token lunch on Uniswap</p>
                                </a>
                                <p className="mb-4 text-white">
                                    We are excited to announce a major milestone in the GATA Protocol ecosystem: the launch of the GATA Token on its first decentralized <a href='/latestnews=1' className='underline text-yellowShade'>Load more</a>.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
                            <a href="/" aria-label="Article">
                                <img
                                    src={Engage}
                                    className="object-center w-full h-full rounded"
                                    alt=""
                                />
                            </a>
                            <div className="py-5 flex flex-col gap-2">
                                <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                                    26 Oct, 2024
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200"
                                >
                                    <p className="text-2xl font-bold leading-5 text-yellowShade underline">GATA Engage2Earn Campaign</p>
                                </a>
                                <p className="mb-4 text-white">
                                    Introducing the GATA Engage2Earn Campaign, an innovative initiative designed to reward our community members for their active <a href='/' className='underline text-yellowShade'>Load more</a>.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
                            <a href="/" aria-label="Article">
                                <img
                                    src={Enhance}
                                    className="object-center w-full h-full rounded"
                                    alt=""
                                />
                            </a>
                            <div className="py-5 flex flex-col gap-2">
                                <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                                    25 Oct, 2024
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200"
                                >
                                    <p className="text-2xl font-bold leading-5 text-white underline">Enhancements</p>
                                </a>
                                <p className="mb-4 text-white">
                                    Access detailed information about new features, improvements, and enhancements to the platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-start gap-5 py-20'>
                        <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase py-3 px-20 rounded-lg'>Events</a></div>
                    </div>
                    <div className="flex flex-col gap-10 max-w-[1443px] sm:mx-auto">
                        <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
                            <a href="/" aria-label="Article">
                                <img
                                    src={upcomingEvents}
                                    className="object-center w-full h-full rounded"
                                    alt=""
                                />
                            </a>
                            <div className="py-5 flex flex-col gap-2">
                                <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                                    26 Oct, 2024
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200"
                                >
                                    <p className="text-2xl font-bold leading-5 text-white underline">upcoming Events</p>
                                </a>
                                <p className="mb-4 text-white">
                                    Dive into the vibrant world of GATA Protocol by participating in our upcoming events. These conferences, webinars, and meetups are <a href='/' className='underline text-yellowShade'>Load more</a>.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
                            <a href="/" aria-label="Article">
                                <img
                                    src={EventRecaps}
                                    className="object-center w-full h-full rounded"
                                    alt=""
                                />
                            </a>
                            <div className="py-5 flex flex-col gap-2">
                                <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                                    26 Oct, 2024
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200"
                                >
                                    <p className="text-2xl font-bold leading-5 text-yellowShade underline">Event Recaps</p>
                                </a>
                                <p className="mb-4 text-white">
                                    Missed an event? Don’t worry! Catch up with our detailed recaps of past events, including highlights, presentations, and key takeaways <a href='/' className='underline text-yellowShade'>Load more</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-start gap-5 py-20'>
                        <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase py-3 px-20 rounded-lg'>Press Release</a></div>
                    </div>
                    <div className="flex flex-col gap-10 max-w-[1443px] sm:mx-auto bg-darkShadeC p-60">
                        <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeC rounded">
                           <p className='text-center text-yellowShade lg:text-2x text-xl'>In Progress</p>
                           <p className='text-center text-darkShadeB'>Nothing new to show at the moment, please do come back again</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
