import React from 'react'
import { Header } from '../../../../Components'
import { GataonUniswap } from '../../../../../Assets'

export default function LatestNewsA() {
    return (
        <main className='bg-darkShadeA'>
            <Header />

            <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
                <div className="flex flex-col gap-5 max-w-[1443px] sm:mx-auto lg:max-w-full">
                    <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase px-10 py-2 rounded-sm'>Announcment</a></div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={GataonUniswap}
                                className="object-center w-full h-full rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5 flex flex-col gap-2">
                            <a
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200"
                            >
                                <p className="lg:text-2xl text-[20px] font-bold leading-5 text-yellowShade">GATA Token lunch on Uniswap</p>
                            </a>
                            <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                                08 Jul, 2024
                            </p>
                            <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                                We are excited to announce a major milestone in the GATA Protocol ecosystem: the launch of the GATA Token on its first decentralized exchange (DEX), Uniswap, on the Optimism Blockchain Network. This launch provides our community with greater access and liquidity, allowing users to trade GATA Tokens in a decentralized manner, without the need for intermediaries.
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
                            <a
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200"
                            >
                                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Learn More About the GATA Token Launch</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
