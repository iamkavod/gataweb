import React from 'react'
import { Header } from '../../../../Components'
import { DarkBG, GataMarketPC, GataMarketPhone, WhiteBg } from '../../../../../Assets'
import { Countdown } from '../../../../Constants'

export default function BuySell() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <main className="flex flex-col items-center justify-center px-4 pt-16 mx-auto max-w-[1443px] lg:pt-32 md:px-0">
        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col items-center max-w-[1443px] md:px-8">
              <div className="max-w-[1443px] lg:mb-10 md:mx-auto sm:text-center">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 text-xl font-bold leading-none tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center">
                  Empower Your Business with GATAMARKET
                </h2>
              </div>

              <p className="max-w-[1443px] lg:mb-10 lg:text-[20px] text-[12px] text-darkShadeB text-center">
                Join the decentralized marketplace where you control your transactions.
              </p>
              <div className='w-full flex justify-center'>
                <div className='lg:mt-0 mt-3 rounded-lg spin-btn p-2 border'>
                  <a
                    href='https://forms.gle/W4xPQf4SVBx5mDwv7'
                    className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize"
                  >
                    Join the Beta
                  </a>
                </div>
              </div>
              <p className="max-w-[1443px] mb-10 mt-3 lg:text-[20px] text-[12px] text-yellowShade md:text-center">
                Limited to the first 100 signups. Secure your spot now!
              </p>
            </div>
            <img
              src={GataMarketPC}
              className="lg:block hidden w-full max-w-screen-sm mx-auto rounded md:w-auto lg:max-w-screen-md"
              alt=""
            />
            <img
              src={GataMarketPhone}
              className="lg:hidden block w-full max-w-screen-xs px-10 mx-auto rounded md:w-auto lg:max-w-screen-md"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className='text-yellowShade lg:text-3xl text-xl text-center pt-20'>GATAMARKET Features</h1>
          <div className="py-5 mx-auto max-w-[1443px] lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 sm:mx-auto max-w-[1443px] ">
              <div className="overflow-hidden transition-shadow duration-300 bg-darkShadeA rounded shadow-sm">
                {/* <img
                  src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="object-cover w-full h-64"
                  alt=""
                /> */}
                <div className='bg-white w-full h-[200px] rounded-lg'></div>
                <div className="py-2">
                  <a
                    href="/"
                    aria-label="Category"
                    className="inline-block mb-3 lg:text-2xl text-[18px] font-bold leading-5 transition-colors duration-200 text-yellowShade"
                  >
                    Product Listing
                  </a>
                  <p className="mb-2 text-darkShadeB lg:text-[20px] text-[12px]">
                    Effortlessly list your products with all essential details in just a few clicks. Reach a global audience and start selling instantly in our decentralized marketplace.
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
                    Product Search & Filters
                  </a>
                  <p className="mb-2 text-darkShadeB lg:text-[20px] text-[12px]">
                    Find exactly what you're looking for with powerful search and filtering options. Discover the best deals tailored to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full flex justify-center'>
              <div className='lg:mt-5 mt-3 rounded-lg spin-btn p-2 border'>
                <a
                  href='/'
                  className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-[8px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize"
                >
                  Join the Beta and Explore GATAMARKET!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col items-center max-w-[1443px] md:px-8">
              <div className="max-w-[1443px] lg:mb-10 md:mx-auto sm:text-center">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 text-xl font-bold leading-2 tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center capitalize">
                  benefits of using <br /> GATAMARKET
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
            <p className='text-darkShadeB lg:text-xl'>Highlights</p>
            <ul className='list-disc ml-6 flex flex-col gap-2'>
              <li className='text-darkShadeB'>Secure & Transparent Transactions</li>
              <li className='text-darkShadeB'>Global Marketplace Access</li>
              <li className='text-darkShadeB'>Reduced Fees & No Middlemen</li>
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
                Experience These Benefits – Join the Beta Now!
              </a>
            </div>
          </div>
        </div>

        <section className='lg:pt-20 pt-10 flex justify-start w-full'>
          <div>
            <div className="flex flex-col">
              <div className=" lg:mb-10">
                <h2 className=" lg:mb-6 mb-3 font-bold leading-none tracking-tight text-yellowShade capitalize">
                  Do You Qualify for the GATAMARKET Beta?
                </h2>
                <div className='flex flex-col gap-3 mt-3'>
                  <p className='text-white lg:text-xl text-sm'>To participate, you must:</p>
                  <ul className='list-disc ml-6 flex flex-col gap-3'>
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
                <h2 className=" lg:mb-6 mb-3 text-xl font-bold leading-none tracking-tight text-yellowShade lg:text-4xl md:mx-auto text-center">
                  Live countdown to the official launch.
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
                className="inline-flex items-center justify-center w-full lg:h-12 h-10 lg:px-20 px-10 lg:text-xl text-[8px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Secure your spot in the GATAMARKET Beta
              </a>
            </div>
          </div>
          <p className="max-w-[1443px] mb-10 mt-3 lg:text-[20px] text-[15px] text-yellowShade text-center">
            Only 100 spots available for qualified participants!
          </p>
        </div>

        <section className='lg:pt-20 pt-10'>
          <div>
            <div className="flex flex-col max-w-[1443px]">
              <div className="max-w-[1443px] lg:mb-5">
                <h2 className="max-w-[1443px] lg:mb-6 mb-3 text-sm font-bold leading-none tracking-tight text-white lg:text-xl text-start capitalize">
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

          <div className='w-full flex justify-center pt-3'>
            <div className='lg:mt-10 mt-3 rounded-lg spin-btn p-2 border'>
              <a
                href='/'
                className="inline-flex items-center justify-center w-full lg:h-12 h-10 lg:px-20 px-10 lg:text-xl text-[8px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none capitalize text-center"
              >
                Join the Beta and Get Started with GATAMARKET!
              </a>
            </div>
          </div>
        </section>
      </main>
    </main>
  )
}
