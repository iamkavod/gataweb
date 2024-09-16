import React from 'react'
import { Header } from '../../../Components'

export default function GataMembership() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      {/* Gata Token */}
      <section className="mx-auto max-w-[1443px] lg:py-44 pt-20 px-2 md:px-5 lg:px-8 flex flex-col gap-10 bg-darkShadeA">
        <div>
          <h1 className='lg:text-4xl text-xl text-yellowShade font-bold'>GATA Membership NFT</h1>
          <p className='lg:text-xl text-sm text-darkShadeB lg:py-10 py-3'>GATA Membership NFT grants access, exclusive privileges, content access, and special perks within the GATA Protocol Ecosystem.</p>
        </div>

        {/* How to get */}
        <div className='flex flex-col gap-3'>
          <h1 className='lg:text-2xl text-xl text-white font-bold uppercase'>How to get</h1>
          <p className='lg:text-xl text-sm text-darkShadeB text-start'>To become a proud member and owner of a GATA Membership NFT:</p>
          <ul className='list-disc pl-6 py-2'>
            <li className='text-darkShadeB lg:text-xl text-sm'>Prerequisite: first and foremost head to  <span className='text-white underline'>1billion2web3 Initiatives</span> to complete your web3 educational journey and get a Certificate that allows you to buy the GATA Membership NFTs.</li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Then visit our designated <span className='text-white underline'>NFT marketplace.</span></li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Find the GATA Membership NFT listing.</li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Purchase the Time-bound NFT directly, using cryptocurrency or other accepted payment methods.</li>
            <li className='text-darkShadeB lg:text-xl text-sm'>Once acquired, enjoy the access and benefits of being a GATA Member.</li>
          </ul>
        </div>

      </section>
    </main>
  )
}
