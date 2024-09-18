import React, { useState } from 'react';
import { Header } from '../../../Components'
import { LotusGlobal } from '../../../../Assets'

export default function Partners() {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>Our Partners</h1>
            <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Discover the esteemed partners collaborating with the GATA Protocol to propel forward the drive for innovation and achieving shared goals.</p>
          </div>
          <div>
            <div className="grid gap-10 lg:grid-cols-1">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 max-w-[1443px]">
                <h2 className="max-w-[1443px] mb-6 font-sans lg:text-[20px] text-[15px] font-bold tracking-tight text-white sm:leading-none">
                  CURRENT PARTNERS
                </h2>
                <div className="flex flex-col mt-10 gap-5 items-center justify-center lg:w-full lg:h-32 w-full h-40 mb-4 rounded-full">
                  <img src={LotusGlobal} alt='LotusGlobal' className='lg:w-60 w-40' />
                  <h2 className="max-w-[1443px] mb-6 font-sans lg:text-[18px] text-[14px] font-bold tracking-tight text-white leading-none">
                    Lotus Global Alliance Corp
                  </h2>
                </div>
                <div className="max-w-[1443px] mt-5 mb-6">

                  <div>
                    <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                      Lotus Global Alliance is a company that specializes in Web3 marketing strategies. They offer a range of services to help businesses navigate the complex and rapidly evolving world of decentralized technology. Their team includes experts in areas such as blockchain, tokenization, NFTs, and the Metaverse.
                      {!isReadMore && (
                        <>
                          <p className="text-darkShadeB lg:text-[20px] text-[12px] my-5">
                            Lotus Global Alliance is committed to helping businesses harness the power of Web3 to drive growth and innovation. They believe that Web3 has the potential to transform the way we interact with the digital world, and they are dedicated to helping their clients stay ahead of the curve.
                          </p>
                          <p className="text-darkShadeB lg:text-[20px] text-[12px]">
                            Overall, Lotus Global Alliance is a valuable resource for businesses looking to leverage the potential of Web3 and decentralized technologies through education and Web3 centric strategies.
                          </p>
                        </>
                      )}
                      <span
                        className='text-white underline cursor-pointer'
                        onClick={toggleReadMore}
                      >
                        {isReadMore ? "..Read more" : "Show less"}
                      </span>
                    </p>

                  </div>
                </div>
                <p className="text-base text-yellowShade lg:text-[20px] text-[12px]">
                  Interested in partnering with us? <span className='text-white underline'>Contact our team</span> to explore collaboration opportunities!
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
