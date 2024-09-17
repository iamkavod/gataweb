import React from 'react'
import { Header } from '../../../../Components'
import { Enhance } from '../../../../../Assets'

export default function LatestNewsB() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className="flex flex-col gap-5 max-w-[1443px] sm:mx-auto lg:max-w-full">
          <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase px-10 py-2 rounded-sm'>Announcment</a></div>
          <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
            <a href="/" aria-label="Article">
              <img
                src={Enhance}
                className="object-center w-full h-full rounded"
                alt=""
              />
            </a>
            <div className="py-5 flex flex-col gap-2">
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-2xl text-[20px] font-bold leading-5 text-yellowShade">Partnership with Lotus Global Alliance</p>
              </a>
              <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                08 Jul, 2024
              </p>
              <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                We are thrilled to announce a strategic partnership with Lotus Global Alliance Corp, a premier company specializing in Web3 marketing strategies. Lotus Global Alliance is renowned for its comprehensive range of services designed to help businesses navigate the rapidly evolving world of decentralized technology. Their expertise spans across blockchain, tokenization, NFTs, and the Metaverse.
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
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Discover More About Our Partnership</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
