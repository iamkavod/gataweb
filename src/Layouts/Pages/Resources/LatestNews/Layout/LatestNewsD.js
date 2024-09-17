import React from 'react'
import { Header } from '../../../../Components'
import { upcomingEvents } from '../../../../../Assets'

export default function LatestNewsD() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className="flex flex-col gap-5 max-w-[1443px] sm:mx-auto lg:max-w-full">
          <div className='w-full'><a href='/' className='bg-yellowShade text-black font-bold lg:text-md text-xs uppercase py-2 px-10 rounded-sm'>Events</a></div>
          <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded">
            <a href="/" aria-label="Article">
              <img
                src={upcomingEvents}
                className="object-center w-full h-full rounded"
                alt=""
              />
            </a>
            <div className="py-5 flex flex-col gap-2">
              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-2xl text-[20px] font-bold leading-5 text-yellowShade">Upcoming Events</p>
              </a>
              <p className="mb-2 text-xs font-bold uppercase text-darkShadeB">
                08 Jul, 2024
              </p>
              <p className="mb-4 text-darkShadeB lg:text-[20px] text-[12px]">
                Dive into the vibrant world of GATA Protocol by participating in our upcoming events. These conferences, webinars, and meetups are designed to keep you connected with the community, informed about the latest developments, and engaged with industry experts.
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


              <a
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200"
              >
                <p className="lg:text-[20px] text-[12px] font-bold leading-5 text-white underline">Explore All Upcoming Events</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
