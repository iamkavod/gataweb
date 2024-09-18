import React from 'react'
import { Header } from '../../../Components'

export default function Contact() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>Contact Us</h1>
            <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Reach out for inquiries, feedback, or partnership opportunities.</p>
            <div>
              <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
                <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Email: <a href='mailto:hello@gataprotocol.org' className='text-white font-bold'>hello@gataprotocol.org</a></li>
                <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Discord: <a href='https://discord.gg/hMsGUhuGRs' className='text-white font-bold'>https://discord.gg/hMsGUhuGRs</a></li>
                <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Web Address: <a href='https://gataprotocol.org/' className='text-white font-bold'>https://gataprotocol.org/</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className='capitalize text-white lg:text-xl text-sm'>Follow Us</h1>
            <ul className='list-disc pl-6 py-2 flex flex-col gap-2'>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Twitter: <a href='https://x.com/gataprotocol' className='text-white font-bold'>https://x.com/gataprotocol</a></li>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Linkedin: <a href='https://www.linkedin.com/company/gata-protocol/' className='text-white font-bold'>https://www.linkedin.com/company/gata-protocol/</a></li>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Facebook: <a href='https://www.facebook.com/gataprotocol' className='text-white font-bold'>https://www.facebook.com/gataprotocol</a></li>
              <li className='text-darkShadeB lg:text-[20px] text-[12px]'>Instagram: <a href='https://www.instagram.com/gataprotocol' className='text-white font-bold'>https://www.instagram.com/gataprotocol</a></li>
            </ul>
          </div>
          <p className='text-yellowShade lg:text-[20px] text-[12px]'>We value collaboration and welcome the opportunity to connect with you!</p>
        </div>
      </section>
    </main>
  )
}
