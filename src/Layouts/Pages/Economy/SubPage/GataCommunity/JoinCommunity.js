import React from 'react'
import { Header } from '../../../../Components'
import { DarkBG, GataBusinessPC, GataMarketPC, GataNowPC, WhiteBg } from '../../../../../Assets'
import { Countdown } from '../../../../Constants'

export default function ShipTrackPackage() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <main className="flex flex-col items-center justify-center px-4 pt-16 mx-auto max-w-[1443px] lg:pt-32 md:px-0">
        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col items-center max-w-[1443px] md:px-8">
              <div className="max-w-[1443px] lg:mb-10 md:mx-auto sm:text-center">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 font-sans text-xl font-bold leading-none tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center">
                  Join the GATA Community
                </h2>
              </div>

              <p className="max-w-[1443px] lg:mb-10 text-xs text-darkShadeB sm:text-sm text-center">
                Be part of a decentralized ecosystem shaping the future of eCommerce and logistics.
              </p>
              <div className='w-full flex justify-center'>
                <div className='lg:mt-0 mt-3 rounded-lg spin-btn p-2 border'>
                  <a
                    href='/'
                    className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-[8px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize"
                  >
                    Become a Member
                  </a>
                </div>
              </div>
            </div>
            <img
              src={GataBusinessPC}
              className="w-full max-w-screen-sm mx-auto rounded md:w-auto lg:max-w-screen-md lg:mt-16 mt-10"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className='text-yellowShade lg:text-3xl text-xl text-center pt-20'>Community Platforms</h1>
          <div className="py-5 mx-auto max-w-[1443px]">
            <div className="grid gap-8 lg:grid-cols-2 sm:mx-auto max-w-[1443px] ">
              <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded shadow-sm">
                <div className='bg-white w-full h-[200px]'></div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Category"
                    className="inline-block mb-3 lg:text-2xl text-[18px] font-bold leading-5 transition-colors duration-200 text-yellowShade"
                  >
                    Discord Section:
                  </a>
                  <p className="mb-2 text-darkShadeB lg:text-[20px] text-[12px]">
                    Engage in real-time conversations, participate in event announcements, and be part of community governance. Discord is where the GATA community thrives.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded shadow-sm">
                {/* <img
                  src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="object-cover w-full h-64"
                  alt=""
                /> */}
                <div className='bg-white w-full h-[200px]'></div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Category"
                    className="inline-block mb-3 lg:text-2xl text-[18px] font-bold leading-5 transition-colors duration-200 text-yellowShade"
                  >
                    Telegram Section:
                  </a>
                  <p className="mb-2 text-darkShadeB lg:text-[20px] text-[12px]">
                    Stay informed with quick updates and direct communication with the core team. Telegram keeps you connected to the pulse of GATA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col items-center max-w-[1443px] md:px-8">
              <div className="max-w-[1443px] lg:mb-10 md:mx-auto sm:text-center">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 font-sans text-xl font-bold leading-none tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center capitalize">
                  Member Benefits
                </h2>
              </div>
            </div>
            <img
              src={WhiteBg}
              className="w-full max-w-[1443px] mx-auto rounded md:w-auto "
              alt=""
            />
          </div>

          <div className='flex flex-col gap-3 mt-3'>
            <p className='text-darkShadeB lg:text-xl text-sm'>Highlights</p>
            <ul className='list-disc ml-6 flex flex-col gap-2'>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Shape the Future of GATA Protocol</li>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Exclusive Access to Special Features</li>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Earn Compensations for Contributions</li>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Participate in Community Governance</li>
            </ul>
          </div>
        </section>

        <div className='mt-10 flex flex-col gap-4'>
          <h1 className='text-white lg:text-2xl text-xl'>Testimonial</h1>
          <img
            src={DarkBG}
            className="w-full max-w-[1443px] lg:h-auto h-[200px] mx-auto rounded md:w-auto "
            alt=""
          />

          <div className='w-full flex justify-center'>
            <div className='lg:mt-5 mt-3 rounded-lg spin-btn p-2 border'>
              <a
                href='/'
                className="inline-flex items-center justify-center w-full lg:h-12 h-10 lg:px-20 px-10 lg:text-xl text-[8px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Join the GATA Community Today!
              </a>
            </div>
          </div>
        </div>

        <section className='lg:pt-20 pt-10 flex justify-start w-full'>
          <div>
            <div className="flex flex-col">
              <div className=" lg:mb-10">
                <div className='flex flex-col gap-3 mt-3'>
                  <p className='text-yellowShade lg:text-2xl text-lg'>  How to Join & Get Started:</p>
                  <ul className='list-disc ml-6 flex flex-col gap-2'>
                    <li className='text-darkShadeB lg:text-[20px] text-[12px]'><span className='text-white'>Infographic:</span> A visual guide to joining the community, from purchasing a membership NFT to accessing Discord and Telegram.</li>
                    <li className='text-darkShadeB lg:text-[20px] text-[12px]'><span className='text-white'>Video:</span> An embedded explainer video that walks users through the Discord channels, governance process, and how to get involved.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='flex flex-col gap-3 mt-3 w-full'>
          <h1 className='text-yellowShade lg:text-2xl text-lg text-start pt-10 pb-5'>Ready to Become a GATA Member?</h1>
          <p className='text-white lg:text-xl text-sm'>To join, you need to:</p>
          <ul className='list-disc ml-6 flex flex-col gap-2'>
            <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Be one of the first 100 to sign up.</li>
            <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Complete the <span className='text-white'>“1billion2web3 Initiatives”</span>web3 onboardiing course and receive your verifiable NFT certificate.</li>
            <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Click the Link to connect with the <span className='text-white'>GATA community</span> on Discord and Telegram.</li>
            <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Engage actively to enjoy all the community benefits.</li>
          </ul>
          <p className='text-yellowShade lg:text-[20px] text-[12px]'>Members with a GATA Pass NFT gain exclusive rights, including governance participation and early access to new features.</p>

          <div className='w-full flex justify-center pb-10'>
            <div className='lg:mt-5 mt-3 rounded-lg spin-btn p-2 border'>
              <a
                href='/'
                className="inline-flex items-center justify-center w-full lg:h-16 h-10 lg:px-20 px-4 lg:text-xl text-[8px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Secure Your Membership and Join the GATA Community!
              </a>
            </div>
          </div>
        </div>


      </main>
    </main>
  )
}
