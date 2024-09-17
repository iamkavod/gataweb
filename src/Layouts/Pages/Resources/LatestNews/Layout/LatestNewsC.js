import React from 'react'
import { Header } from '../../../../Components'
import { Engage } from '../../../../../Assets'

export default function LatestNewsC() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className="flex flex-col gap-5 max-w-[1443px] sm:mx-auto lg:max-w-full">
          <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase px-10 py-2 rounded-sm'>Announcment</a></div>
          <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
            <a href="/" aria-label="Article">
              <img
                src={Engage}
                className="object-center w-full h-full rounded"
                alt=""
              />
            </a>
            <div className="py-5 flex flex-col gap-2">
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-2xl text-[20px] font-bold leading-5 text-yellowShade">GATA Engage2Earn Campaign</p>
              </a>
              <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                08 Jul, 2024
              </p>
              <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                Introducing the GATA Engage2Earn Campaign, an innovative initiative designed to reward our community members for their active participation and engagement with GATA Protocol's social media postings. This campaign is akin to social media mining, where users can earn GATA Tokens simply by engaging with our content.
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
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Find Out More About Engage2Earn</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
