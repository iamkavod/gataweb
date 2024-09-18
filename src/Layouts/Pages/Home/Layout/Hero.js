import React from 'react'
import { FractalCube, HomeDivider, HomeHeroImg, LeftAngle, LeftSpinner, PageSpinner, RightAngle } from '../../../../Assets'

export default function Hero() {
  return (
    <main className='bg-darkShadeA'>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-2 pt-32 mx-auto max-w-screen-[1443px] lg:pt-44 md:px-0">
        <div className="flex flex-col items-center max-w-7xl md:px-8">
          <div className="mb-10 md:mx-auto sm:text-center max-w-7xl md:mb-12">
            <h2 className="max-w-[1443px] mb-6 text-[20px] lg:text-[35px] text-center font-bold leading-none tracking-tight text-yellowShade  md:mx-auto uppercase font-bruno">
              Community Owned Decentralized E-Commerce and <br /> <span className='text-white'>LOGISTICS ECOSYSTEM</span>
            </h2>
            <p className="text-base text-white lg:text-[20px] text-[15px] text-center">
              An ecosystem of buyers, sellers and logistics partners in small, medium and large enterprises globally
            </p>
          </div>
        </div>
        <img
          src={HomeHeroImg}
          className="w-full max-w-screen-sm mx-auto rounded md:w-auto lg:max-w-screen-lg"
          alt=""
        />
        <div className='lg:mt-20 mt-10 rounded-lg spin-btn p-2 border border-blue-200'>
          <a
            href='/'
            className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
          >
            Buy/Sell
          </a>
        </div>
      </section>

      {/* Left Right Section */}
      <div className='flex justify-between items-center max-w-screen lg:-mt-96 -mt-20 overflow-x-hidden'>
        <img src={LeftAngle} alt='left' className='lg:w-auto lg:h-[900px] w-auto h-[300px]' />
        <img src={RightAngle} alt='right' className='lg:w-auto lg:h-[900px] w-auto h-[300px] lg:-ml-0 -ml-10' />
      </div>

      {/* HeroDivider */}
      <div className='flex justify-center max-w-screen lg:-mt-32 -mt-10'>
        <img src={HomeDivider} alt='divider' />
      </div>


      {/* SubHero */}
      <section className="relative flex flex-col items-center justify-center px-2 py-20 mx-auto max-w-screen md:px-0 overflow-hidden z-50">
        <div className="rolldivLeft">
          <div className="rollLeft"></div>
        </div>
        <div className="relative flex flex-col items-center max-w-7xl md:px-8">
          <div className="mb-10 md:mx-auto sm:text-center max-w-7xl md:mb-12">
            <h2 className="max-w-screen-[1443px] mb-6 text-[16px] lg:text-[35px] text-center font-bold leading-none tracking-tight text-yellowShade md:mx-auto uppercase font-bruno">
              Take control, <span className='text-white'>Join Our Community, connect, buy, sell</span>  and <span className='text-white'>ship products</span> with confidence in an ecosystem where doing commerce online pays!
            </h2>
          </div>
        </div>
        {/* <div> */}
        <img
          src={FractalCube}
          className="w-full max-w-screen-sm mx-auto rounded md:w-auto lg:max-w-screen-lg bounce"
          alt=""
        />
        <div className='lg:mt-20 mt-10 rounded-lg spin-btn p-2 border border-blue-200'>
          <a
            href='/framwork'
            className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-[20px] text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
          >
            Our Framework
          </a>
          {/* </div> */}
        </div>
        <div className="rolldivRightH">
          <div className="rollRightH"></div>
        </div>
      </section>

    </main>
  )
}
