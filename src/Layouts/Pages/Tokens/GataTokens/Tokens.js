import React from 'react'
import { Header } from '../../../Components'

export default function Tokens() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      {/* Gata Token */}
      <section className="mx-auto max-w-[1443px] lg:py-44 pt-20 px-2 md:px-5 lg:px-8 flex flex-col gap-10 bg-darkShadeA">
        <div>
          <h1 className='lg:text-4xl text-xl text-yellowShade font-bold'>GATA Token</h1>
          <p className='lg:text-xl text-sm text-darkShadeB lg:py-10 py-3'>GATA Token serves as the native utility token within the decentralized eCommerce and logistics ecosystem of GATA Protocol. It facilitates transactions, incentivizes participation, and powers various services within the platform.</p>
        </div>

        {/* Tokenomics */}
        <div>
          <h1 className='lg:text-2xl text-xl text-white font-bold uppercase'>Tokenomics</h1>
          <ul className='list-disc pl-6 py-2'>
            <li className='text-darkShadeB lg:text-xl text-sm'>Total Supply: <span className='text-white font-bold'>10,000,000,000.00 GATA</span></li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Circulating Supply: <span className='text-white font-bold'>XXXX GATA </span></li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Initial Distribution: <span className='text-white font-bold'>XXXX GATA</span></li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Token Type: <span className='text-white font-bold'>ERC-20</span></li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Contract Address: <span className='text-white font-bold'>[Insert Contract Address]</span></li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className='lg:w-[500px] border-2 border-yellowShade p-5 flex flex-col justify-center items-center gap-4'>
          <p className='lg:text-2xl text-xl text-yellowShade font-bold'>Disclaimer</p>
          <p className='lg:text-xl text-sm text-darkShadeB text-center'>GATA tokens are not for investment but are essential for various purposes within the ecosystem.</p>
        </div>

        {/* Token Uses */}
        <div>
          <h1 className='lg:text-2xl text-xl text-white font-bold uppercase'>Token Uses</h1>
          <ul className='list-disc pl-6 py-2'>
            <li className='text-darkShadeB lg:text-xl text-sm'>Facilitating transactions on our decentralized eCommerce platform.</li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Paying for shipping and logistics costs on our decentralized logistics platform.</li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Providing incentives to users who contribute to the ecosystem’s growth through engagement.</li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Accessing premium features and services within the ecosystem.</li>
          </ul>
        </div>

        {/* Where to Buy/Sell */}
        <div>
          <h1 className='lg:text-2xl text-xl text-white font-bold uppercase'>Where to Buy/Sell</h1>
          <h1 className='lg:text-xl text-sm text-white font-bold uppercase'>You can buy or sell GATA tokens from the following</h1>
          <ul className='list-disc pl-6 py-2 flex flex-col justify-start gap-10'>
            <li className='text-darkShadeB lg:text-xl text-sm text-white underline'>Decentralized Exchanges (DEX)
              <p className='lg:text-xl text-sm underline'>TBA</p>
            </li>
            <li className='text-darkShadeB lg:text-xl text-sm text-white underline'>Centralized Exchanges (CEX)
              <p className='lg:text-xl text-sm'>TBA</p>
            </li>
            <li className='text-darkShadeB lg:text-xl text-sm text-white underline'>Other Platforms
              <p className='lg:text-xl text-sm underline'>TBA</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
