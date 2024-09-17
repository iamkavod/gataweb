import React from 'react';
import { Header } from '../../../../../../Components'
import { GataMarket } from '../../../../../../../Assets'

export default function GataMarketUI() {

  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className='py-32'>
        <div className="relative">
          <div className="relative">
            <div className="px-4 py-0 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12 flex justify-center" >
                  <img src={GataMarket} alt="The Network" className="lg:w-auto lg:h-80 w-auto h-80" />
                </div>

                <div className='flex flex-col gap-5'>
                  <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center leading-2'>GATAMARKET <br /> Our dCommerce App</h1>
                  <p className='text-darkShadeB text-center lg:text-[20px] text-[12px]'>GATAMARKET is not just a marketplace; it's a revolutionary force transforming the way products are bought, sold, and delivered within the GATA Protocol ecosystem. At its core, GATAMARKET is the vibrant heartbeat of our decentralized vision, connecting buyers and sellers directly, eliminating intermediaries, and enhancing trust and transparency.</p>
                  <div className='w-full flex justify-center'>
                    <div className='lg:mt-0 mt-3 mb-3 rounded-lg spin-btn p-2 border'>
                      <a
                        href='/'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Buy/Sell Product now
                      </a>
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>Features</h1>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Peer-to-Peer Transactions</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>GATAMARKET empowers buyers and sellers to interact directly, fostering trust, efficiency, and seamless communication. Say goodbye to middlemen and their excessive fees.
                      </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Smart Contracts</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>We utilize self-executing smart contracts powered by <span className='text-white underline'>Blockchain</span>, ensuring secure and automated transactions. Manual interventions and fraud risks become relics of the past.
                      </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Decentralized Product Listings</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Sellers can showcase their products globally through decentralized listings. Accuracy, consistency, and transparency are our guiding principles.
                      </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Traceability of Goods</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Blockchain's immutability provides end-to-end traceability, allowing buyers to verify product origins, authenticity, and journeys. Trust is paramount.
                      </p>
                    </div>
                  </div>

                  <div className='py-5 flex flex-col gap-5'>
                    <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center mb-2'>Benefits for Buyers</h1>
                    <div className='flex justify-center'>
                      <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                        <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Lower Prices</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Eliminating intermediaries means buyers access products directly, potentially resulting in lower costs compared to centralized online marketplaces.</p>
                      </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Improved Transparency</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Buyers enjoy a transparent view of pricing, shipping costs, and essential information. No surprises, just informed choices.</p>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Enhanced Product Quality</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Transparent supply chain information empowers buyers to make informed decisions, ensuring authenticity and quality. Counterfeit concerns? Gone.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='pt-5 pb-5 flex flex-col gap-5'>
                    <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center mb-2'>Benefits for Sellers</h1>
                    <div className='flex justify-center'>
                      <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                        <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Reduced Fees</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>GATAMARKET slashes fees compared to centralized online marketplaces, allowing sellers to retain a larger share of their revenue. Your profits, your way.</p>
                      </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Global Reach</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Access a global audience and explore new markets. Whether you're a small business or a large enterprise, the world is your marketplace.</p>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Increased Trust</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Blockchain and decentralized identification methods build a trust-driven environment. Establish credibility through verified identities, transactions and positive feedback, building lasting trust and loyalty.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='w-full flex justify-center'>
                    <div className='lg:mt-0 mt-0 rounded-lg spin-btn p-2 border'>
                      <a
                        href='/'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-[20px] text-[12px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Buy/Sell Product now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
