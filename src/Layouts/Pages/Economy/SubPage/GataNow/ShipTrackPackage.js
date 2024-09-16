import React from 'react'
import { Header } from '../../../../Components'
import { DarkBG, GataMarketPC, GataNowPC, WhiteBg } from '../../../../../Assets'
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
                  Simplify Your Shipping with GATANOW
                </h2>
              </div>

              <p className="max-w-[1443px] lg:mb-10 text-xs text-darkShadeB sm:text-sm text-center">
                Efficient, transparent, and decentralized logistics services.
              </p>
              <div className='w-full flex justify-center'>
                <div className='lg:mt-0 mt-3 rounded-lg spin-btn p-2 border'>
                  <a
                    href='/'
                    className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize"
                  >
                    Join the Beta
                  </a>
                </div>
              </div>
              <p className="max-w-[1443px] mb-10 mt-3 text-xs text-yellowShade sm:text-sm md:text-center">
                Limited to the first 100 qualified participants. Do you meet the requirements?
              </p>
            </div>
            <img
              src={GataNowPC}
              className="w-full max-w-screen-sm mx-auto rounded md:w-auto lg:max-w-screen-md"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className='text-yellowShade lg:text-3xl text-xl text-center pt-20 pb-5'>GATANow features</h1>
          <div className="py-16 mx-auto max-w-[1443px] lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 sm:mx-auto max-w-[1443px] ">
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
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-yellowShade"
                  >
                    Book a Delivery
                  </a>
                  <p className="mb-2 text-darkShadeB">
                    Easily book your delivery by inputting package details, selecting delivery speed, and receiving instant cost estimates. Get your shipments moving with just a few clicks.
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
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-yellowShade"
                  >
                    Track Shipment
                  </a>
                  <p className="mb-2 text-darkShadeB">
                    Stay updated with real-time tracking. Monitor your shipment’s journey from dispatch to delivery with live status updates.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full flex justify-center'>
              <div className='lg:mt-5 mt-3 rounded-lg spin-btn p-2 border'>
                <a
                  href='/'
                  className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize"
                >
                  Join the Beta and Experience Seamless Shipping!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col items-center max-w-[1443px] md:px-8">
              <div className="max-w-[1443px] lg:mb-10 md:mx-auto sm:text-center">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 font-sans text-xl font-bold leading-none tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center capitalize">
                  benefits of using GATANow
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
            <ul className='list-disc ml-6'>
              <li className='text-darkShadeB'>Real-Time Shipment Tracking</li>
              <li className='text-darkShadeB'>Cost-Effective Delivery Solutions</li>
              <li className='text-darkShadeB'>Seamless Integration with GATAMARKET</li>
            </ul>
          </div>
        </section>

        <div className='mt-10 flex flex-col gap-4'>
          <h1 className='text-white lg:text-2xl text-xl'>Testimonial</h1>
          <img
            src={DarkBG}
            className="w-full max-w-[1443px] mx-auto rounded md:w-auto "
            alt=""
          />

          <div className='w-full flex justify-center'>
            <div className='lg:mt-5 mt-3 rounded-lg spin-btn p-2 border'>
              <a
                href='/'
                className="inline-flex items-center justify-center w-full lg:h-12 h-10 lg:px-20 px-10 lg:text-xl text-xs font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Unlock These Benefits – Join the Beta Now!
              </a>
            </div>
          </div>
        </div>

        <section className='lg:pt-20 pt-10 flex justify-start w-full'>
          <div>
            <div className="flex flex-col">
              <div className=" lg:mb-10">
                <h2 className=" lg:mb-6 mb-3 font-sans text-xl font-bold leading-none tracking-tight text-yellowShade lg:text-4xl capitalize">
                  Are You Ready for the GATANOW Beta?
                </h2>
                <div className='flex flex-col gap-3 mt-3'>
                  <p className='text-darkShadeB lg:text-xl text-sm'>To participate, you must:</p>
                  <ul className='list-disc ml-6'>
                    <li className='text-darkShadeB'>Be one of the first 100 to sign up.</li>
                    <li className='text-darkShadeB'>Have completed the <span className='text-white'>“1billion2web3 Initiatives”</span> web3 onboardiing course and received your verifiable NFT certificate.</li>
                    <li className='text-darkShadeB'>Have at least <span className='text-white'>200,000 GATA Tokens</span> in your wallet.</li>
                  </ul>
                  <p className='text-yellowShade lg:text-xl text-sm'>Only those who meet all the prerequisites will receive a one-year free membership GATA Pass NFT.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col items-center ">
              <div className=" lg:mb-10 md:mx-auto sm:text-center">
                <h2 className=" lg:mb-6 mb-3 font-sans text-sm font-bold leading-none tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center">
                  Live countdown to GATANOW's official launch.
                </h2>
              </div>


              <div className=''>
                <Countdown />
              </div>

            </div>
          </div>
        </section>
        <div>
          <div className='w-full flex justify-center'>
            <div className='lg:mt-0 mt-3 rounded-lg spin-btn p-2 border'>
              <a
                href='/'
                className="inline-flex items-center justify-center w-full lg:h-12 h-10 lg:px-20 px-10 lg:text-xl text-xs font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Secure your spot in the GATANOW Beta
              </a>
            </div>
          </div>
          <p className="max-w-[1443px] mb-10 mt-3 text-xs text-yellowShade sm:text-sm text-center">
            Only 100 spots available for qualified participants!
          </p>
        </div>

        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col max-w-[1443px]">
              <div className="max-w-[1443px] lg:mb-5">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 font-sans text-sm font-bold leading-none tracking-tight text-white lg:text-xl text-start capitalize">
                  How It Works Section:
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
            <ul className='list-disc ml-6'>
              <li className='text-darkShadeB lg:text-xl text-xs'>Ensure your account is linked with GATAMARKET for a seamless experience. Start shipping with confidence using GATANOW!</li>
            </ul>
          </div>

          <div className='w-full flex justify-center pb-10'>
            <div className='lg:mt-10 mt-3 rounded-lg spin-btn p-2 border'>
              <a
                href='/'
                className="inline-flex items-center justify-center w-full lg:h-12 h-10 lg:px-20 px-10 lg:text-xl text-xs font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Join the Beta and Start Shipping with GATANOW!
              </a>
            </div>
          </div>
        </section>
      </main>
    </main>
  )
}
