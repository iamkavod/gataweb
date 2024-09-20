import React, { useState } from 'react'
import { Header } from '../../../Components'
import { Engage, Enhance, EventRecaps, GataonUniswap, upcomingEvents } from '../../../../Assets'

export default function LatestNews({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleReadMore = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <main className='bg-darkShadeA'>
            <Header />

            <div className="px-4 py-20 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
                <div>
                    <div className='flex flex-col justify-start gap-5 py-5'>
                        <p className='lg:text-2xl text-xl text-yellowShade font-bold'>Latest News</p>
                        <p className='text-darkShadeB lg:text-lg text-sm'>Stay informed about the latest developments and announcements from the GATA Protocol ecosystem.</p>
                    </div>
                </div>
                {/* Annoucements */}
                <div className="flex flex-col gap-5 max-w-[1443px] sm:mx-auto lg:max-w-full mt-2" id='cartegory'>
                    <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase p-3 rounded-lg'>Announcment</a></div>
                    <div id='section-cartegory' className='h-[300px] overflow-y-scroll'>
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
                                <div className='flex gap-3 items-center'>
                                    <span className='bg-yellowShade w-3 h-3 rounded-full'></span>
                                    <p className="lg:text-2xl text-[20px] font-bold leading-5 text-white underline">GATA Token lunch on Uniswap</p>
                                </div>
                                <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                                    We are excited to announce a major milestone in the GATA Protocol ecosystem: the launch of the GATA Token on its first decentralized exchange (DEX), Uniswap, on the Optimism Blockchain Network.
                                    {activeIndex === 0 && (
                                        <>
                                            <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                                                This launch provides our community with greater access and liquidity, allowing users to trade GATA Tokens in a decentralized manner, without the need for intermediaries.
                                            </p>
                                            <h1 className='capitalize text-white lg:text-xl text-sm'>What this means for you:</h1>
                                            <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                <li className='text-white lg:text-[20px] text-[12px]'>Increased Liquidity: <span className='text-darkShadeB font-bold'> The GATA Token will be more accessible than ever, enabling easier trading and participation in the DeFi space.</span></li>
                                                <li className='text-white lg:text-[20px] text-[12px]'>Decentralized Trading: <span className='text-darkShadeB font-bold'>Enjoy the benefits of decentralized trading on Uniswap, including enhanced security and control over your assets. </span></li>
                                                <li className='text-white lg:text-[20px] text-[12px]'>Optimism Blockchain: <span className='text-darkShadeB font-bold'>Leveraging the scalability and speed of the Optimism Blockchain, transactions will be faster and more cost-effective.</span></li>
                                            </ul>
                                            <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                                                Join us on this exciting journey as we expand our presence in the decentralized finance world. Stay tuned for more updates and detailed guides on how to trade GATA Tokens on Uniswap.
                                            </p>
                                            <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Learn More About the GATA Token Launch</p>
                                        </>
                                    )}
                                    <span
                                        className='text-yellowShade font-bold underline cursor-pointer'
                                        onClick={() => toggleReadMore(0)}
                                    >
                                        {activeIndex === 0 ? "Show less" : "...Read more"}
                                    </span>
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
                                <div className='flex gap-3 items-center'>
                                    <span className='bg-yellowShade w-3 h-3 rounded-full'></span>
                                    <p className="lg:text-2xl text-[20px] font-bold leading-5 text-white underline">GATA Engage2Earn Campaign</p>
                                </div>
                                <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                                    Introducing the GATA Engage2Earn Campaign, an innovative initiative designed to reward our community members for their active participation and engagement with GATA Protocol's social media postings.
                                    {activeIndex === 1 && (
                                        <>
                                            <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                                                This campaign is akin to social media mining, where users can earn GATA Tokens simply by engaging with our content.
                                            </p>
                                            <div>
                                                <h1 className='capitalize text-white lg:text-xl text-sm'>how it works:</h1>
                                                <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                    <li className='text-white lg:text-[20px] text-[12px]'>Engage with Posts: <span className='text-darkShadeB font-bold'>Like, comment, share, and interact with GATA Protocol's social media posts.</span></li>
                                                    <li className='text-white lg:text-[20px] text-[12px]'>Earn GATA Tokens: <span className='text-darkShadeB font-bold'>Each interaction will earn you GATA Tokens, rewarding your active participation.</span></li>
                                                    <li className='text-white lg:text-[20px] text-[12px]'>Be a Part of Our Community: <span className='text-darkShadeB font-bold'>Join a vibrant community of users who are passionate about decentralized technologies and the GATA Protocol.</span></li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h1 className='capitalize text-white lg:text-xl text-sm'>Why Participate?</h1>
                                                <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                    <li className='text-white lg:text-[20px] text-[12px]'>Get Rewarded: <span className='text-darkShadeB font-bold'>Turn your social media engagement into tangible rewards.</span></li>
                                                    <li className='text-white lg:text-[20px] text-[12px]'>Stay Informed: <span className='text-darkShadeB font-bold'>Keep up-to-date with the latest news, updates, and developments within the GATA Protocol ecosystem.</span></li>
                                                    <li className='text-white lg:text-[20px] text-[12px]'>Support GATA Protocol: <span className='text-darkShadeB font-bold'>Help spread the word and contribute to the growth of our community. </span></li>
                                                </ul>
                                            </div>
                                            <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                                                Start engaging today and earn rewards for your participation. Together, we can build a stronger, more connected GATA Protocol community.
                                            </p>

                                            <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Find Out More About Engage2Earn</p>
                                        </>
                                    )}
                                    <span
                                        className='text-yellowShade font-bold underline cursor-pointer'
                                        onClick={() => toggleReadMore(1)}
                                    >
                                        {activeIndex === 1 ? "Show less" : "...Read more"}
                                    </span>
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
                                <div className='flex gap-3 items-center'>
                                    <span className='bg-yellowShade w-3 h-3 rounded-full'></span>
                                    <p className="lg:text-2xl text-[20px] font-bold leading-5 text-white underline">Enhancements</p>
                                </div>

                                <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                                    We are thrilled to announce a strategic partnership with Lotus Global Alliance Corp, a premier company specializing in Web3 marketing strategies.
                                    {activeIndex === 2 && (
                                        <>
                                            <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                                                Lotus Global Alliance is renowned for its comprehensive range of services designed to help businesses navigate the rapidly evolving world of decentralized technology. Their expertise spans across blockchain, tokenization, NFTs, and the Metaverse.
                                            </p>
                                            <h1 className='capitalize text-white lg:text-xl text-sm'>About Lotus Global Alliance:</h1>
                                            <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                <li className='text-white lg:text-[20px] text-[12px]'>Web3 Marketing Strategies: <span className='text-darkShadeB font-bold'>Expert guidance on leveraging Web3 technologies to drive growth and innovation.</span></li>
                                                <li className='text-white lg:text-[20px] text-[12px]'>Blockchain and Tokenization: <span className='text-darkShadeB font-bold'>Tailored solutions to harness the power of blockchain and tokenization for your business</span></li>
                                                <li className='text-white lg:text-[20px] text-[12px]'>NFTs and Metaverse: <span className='text-darkShadeB font-bold'>Insightful strategies to explore and capitalise on the potential of NFTs and the Metaverse.</span></li>
                                            </ul>
                                            <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                                                <span className='text-white font-bold '>Our Collaboration:</span> This partnership aims to onboard individuals, community members, and users into the Web3 ecosystem. With Lotus Global Alliance's expertise, we are dedicated to helping our community stay ahead of the curve, embracing the transformative potential of Web3 technologies.
                                            </p>
                                            <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                                                Together, we are committed to fostering growth and innovation within the GATA Protocol ecosystem.
                                            </p>
                                            <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Discover More About Our Partnership</p>
                                        </>
                                    )}
                                    <span
                                        className='text-yellowShade font-bold underline cursor-pointer'
                                        onClick={() => toggleReadMore(2)}
                                    >
                                        {activeIndex === 2 ? "Show less" : "...Read more"}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events */}
                <div>
                    <div className='flex flex-col justify-start gap-5 py-5' id='cartegory'>
                        <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase py-3 px-20 rounded-lg'>Events</a></div>
                    </div>
                    <div id='section-cartegory' className='h-[300px] overflow-y-scroll'>

                        <div className="flex flex-col gap-10 max-w-[1443px] sm:mx-auto" id='section-cartegory'>
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
                                    <div className='flex gap-3 items-center'>
                                        <span className='bg-yellowShade w-3 h-3 rounded-full'></span>
                                        <p className="lg:text-2xl text-[20px] font-bold leading-5 text-white underline">Upcoming Events</p>
                                    </div>

                                    <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                                        Dive into the vibrant world of GATA Protocol by participating in our upcoming events.
                                        {activeIndex === 3 && (
                                            <>
                                                <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                                                    These conferences, webinars, and meetups are designed to keep you connected with the community, informed about the latest developments, and engaged with industry experts.
                                                </p>
                                                <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                                                    Lotus Global Alliance is committed to helping businesses harness the power of Web3 to drive growth and innovation. They believe that Web3 has the potential to transform the way we interact with the digital world, and they are dedicated to helping their clients stay ahead of the curve.
                                                </p>
                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA Community Meet-up</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-darkShadeB lg:text-[20px] text-[12px]'>-Every 2nd and 4th Wednesday of every month at 4:00 PM</li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Where: <span className='text-darkShadeB font-bold'>Discord Voices (Link)</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>What: <span className='text-darkShadeB font-bold'>Join us for our regular community meet-ups where we discuss onboarding processes, provide community updates, and foster connections within the GATA Protocol ecosystem. Don’t miss this chance to connect and share with fellow community members.</span></li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA AMA Virtual Fireside</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>When: <span className='text-darkShadeB font-bold'>Every last Friday of every month at 8:00 PM</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Where: <span className='text-darkShadeB font-bold'>Discord Voices (Link)</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>What: <span className='text-darkShadeB font-bold'>Have burning questions about GATA Protocol? Join our “Ask Me Anything” sessions with the GATA team members and industry experts. This is your opportunity to gain insights, share your thoughts, and get your questions answered directly by those in the know</span></li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA Showcase & Network</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>When: <span className='text-darkShadeB font-bold'>Every 2nd Thursday of every month at 2:30 PM</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Where: <span className='text-darkShadeB font-bold'>Discord Voices (Link)</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>What: <span className='text-darkShadeB font-bold'>Discover the latest business developments, products, and services within the GATA Protocol ecosystem. Network with like-minded professionals and explore collaborative opportunities in this dynamic showcase event.</span></li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA Webinar Workshops</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>When: <span className='text-darkShadeB font-bold'>Every 2nd Tuesday of every third month at 5:00 PM</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Where: <span className='text-darkShadeB font-bold'>Google Meet (Link)</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>What: <span className='text-darkShadeB font-bold'>Enhance your skills with in-depth tutorials on eCommerce, logistics, blockchain, and technology. Our webinar workshops are crafted to help you build practical knowledge and expertise in the decentralized technology space.</span></li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA Annual Conference</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>When: <span className='text-darkShadeB font-bold'>Every 1st Friday of every November at 3:00 PM</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Where: <span className='text-darkShadeB font-bold'>Google Meet (Link)</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>What: <span className='text-darkShadeB font-bold'>Join us for our flagship annual conference featuring keynote speeches, panel discussions, and protocol updates. This is the premier event of the year for the GATA Protocol community, offering unparalleled opportunities to learn, connect, and grow.</span></li>
                                                    </ul>
                                                </div>


                                                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Explore All Upcoming Events</p>

                                            </>
                                        )}
                                        <span
                                            className='text-yellowShade font-bold underline cursor-pointer'
                                            onClick={() => toggleReadMore(3)}
                                        >
                                            {activeIndex === 3 ? "Show less" : "...Read more"}
                                        </span>
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
                                    <div className='flex gap-3 items-center'>
                                        <span className='bg-yellowShade w-3 h-3 rounded-full'></span>
                                        <p className="lg:text-2xl text-[20px] font-bold leading-5 text-white underline">Event Recaps</p>
                                    </div>
                                    <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                                        Missed an event? Don’t worry! Catch up with our detailed recaps of past events, including highlights, presentations, and key takeaways.
                                        {activeIndex === 4 && (
                                            <>
                                                <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                                                    Our recaps ensure you stay informed about what’s happening in the GATA Protocol community, even if you couldn’t attend the event live.
                                                </p>
                                                <p className="lg:text-[20px] text-[15px] font-bold leading-5 text-yellowShade">Recent Highlights:</p>
                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA AMA 20th October, 2024:</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Event: <span className='text-darkShadeB font-bold'>AMA (Ask Me Anything) Fireside</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Highlights: <span className='text-darkShadeB font-bold'>Co-founders Naza Raymond and Amy Marcella led an engaging discussion on the role of GATA in trusted online commerce. Key insights on the latest updates and future plans were shared, making it an informative session for all attendees.</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Recap Link: <a href='/' className='text-darkShadeB font-bold underline'>Listen to the AMA Recap</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA AMA 26th April, 2024:</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Event: <span className='text-darkShadeB font-bold'>Telegram Community AMA Session</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Highlights: <span className='text-darkShadeB font-bold'>The session covered crucial updates on the GATA Protocol, addressing community questions and providing a deeper understanding of the project’s direction.</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Recap Link: <a href='/' className='text-darkShadeB font-bold underline'>Listen to the AMA Recap</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h1 className='capitalize text-white lg:text-xl text-sm'>GATA AMA 31st May, 2024:</h1>
                                                    <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Event: <span className='text-darkShadeB font-bold'>Fireside Session</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Highlights: <span className='text-darkShadeB font-bold'>This session focused on community engagement, with active participation and insightful questions from the audience. The discussion emphasised recent achievements and upcoming initiatives within the GATA ecosystem.</span></li>
                                                        <li className='text-white lg:text-[20px] text-[12px]'>Recap Link: <a href='/' className='text-darkShadeB font-bold underline'>Listen to the AMA Recap</a></li>
                                                    </ul>
                                                </div>
                                                <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                                                    Stay updated with all our past and upcoming events to make the most out of your GATA Protocol experience.
                                                </p>
                                                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Read All Event Recaps</p>
                                            </>
                                        )}
                                        <span
                                            className='text-yellowShade font-bold underline cursor-pointer'
                                            onClick={() => toggleReadMore(4)}
                                        >
                                            {activeIndex === 4 ? "Show less" : "...Read more"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 gap-5 mt-3'>
                    <div className=''><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase py-3 px-16 rounded-lg'>Press Release</a></div>
                    <div className='lg:w-full lg:h-[300px] w-[500w] bg-darkShadeC p-10 flex flex-col justify-center rounded-lg items-center gap-4'>
                        <p className='text-center text-yellowShade lg:text-2x text-[16px] font-bold uppercase'>In Progress...</p>
                        <p className='text-center text-darkShadeB'>Nothing new to show at the moment, please do come back again</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
