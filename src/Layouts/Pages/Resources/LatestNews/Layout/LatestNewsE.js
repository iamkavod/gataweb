import React from 'react'
import { Header } from '../../../../Components'
import { EventRecaps } from '../../../../../Assets'

export default function LatestNewsE() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className="flex flex-col gap-5 max-w-[1443px] sm:mx-auto lg:max-w-full">
          <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase py-2 px-10 rounded-sm'>Events</a></div>
          <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
            <a href="/" aria-label="Article">
              <img
                src={EventRecaps}
                className="object-center w-full h-full rounded"
                alt=""
              />
            </a>
            <div className="py-5 flex flex-col gap-2">
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-2xl text-[20px] font-bold leading-5 text-yellowShade">Event Recaps</p>
              </a>
              <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                08 Jul, 2024
              </p>
              <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                Missed an event? Don’t worry! Catch up with our detailed recaps of past events, including highlights, presentations, and key takeaways. Our recaps ensure you stay informed about what’s happening in the GATA Protocol community, even if you couldn’t attend the event live.
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
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Read All Event Recaps</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
