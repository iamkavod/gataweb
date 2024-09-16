import React from 'react'
import { Header } from '../../../Components'

export default function Contact() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>Contact Us</h1>
            <p className='text-darkShadeB'>Reach out for inquiries, feedback, or partnership opportunities.</p>
            <div>
              <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                <li className='text-darkShadeB lg:text-md text-sm'>Email: <a href='mailto:hello@gataprotocol.org' className='text-white font-bold'>hello@gataprotocol.org</a></li>
                <li className='text-darkShadeB lg:text-md text-sm'>Discord: <a href='https://discord.com/invite/nHZTQNbEdk' className='text-white font-bold'>https://discord.com/invite/nHZTQNbEdk</a></li>
                <li className='text-darkShadeB lg:text-md text-sm'>Web Address: <a href='https://gataprotocol.org/' className='text-white font-bold'>https://gataprotocol.org/</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className='capitalize text-white lg:text-xl text-sm'>Follow Us</h1>
            <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
              <li className='text-darkShadeB lg:text-md text-sm'>Twitter: <a href='https://x.com/gataprotocol' className='text-white font-bold'>https://x.com/gataprotocol</a></li>
              <li className='text-darkShadeB lg:text-md text-sm'>Linkedin: <a href='https://www.linkedin.com/company/gata-protocol/' className='text-white font-bold'>https://www.linkedin.com/company/gata-protocol/</a></li>
              <li className='text-darkShadeB lg:text-md text-sm'>Facebook: <a href='https://www.facebook.com/gataprotocol' className='text-white font-bold'>https://www.facebook.com/gataprotocol</a></li>
              <li className='text-darkShadeB lg:text-md text-sm'>Instagram: <a href='https://www.instagram.com/gataprotocol' className='text-white font-bold'>https://www.instagram.com/gataprotocol</a></li>
            </ul>
          </div>
          <p className='text-yellowShade'>We value collaboration and welcome the opportunity to connect with you!</p>
        </div>
      </section>
    </main>
  )
}
