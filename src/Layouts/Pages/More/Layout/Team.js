import React from 'react'
import { Header } from '../../../Components'
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Team() {
    return (
        <main className='bg-darkShadeA'>
            <Header />

            <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>The Team</h1>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Meet the talented individuals driving innovation at the GATA Protocol.</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-xl text-sm'>Naza Raymond</h1>
                        <p className='text-white'> Co-founder <span className='text-darkShadeB'>and</span> Project Manager</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Naza Raymond is the visionary founder and CEO of DXentralized Labs. With a passion for blockchain technology and decentralized solutions, Naza leads the team in shaping the future of the GATA Protocol ecosystem.</p>
                        <div className='flex items-center gap-5 lg:text-3xl text-[20px] text-yellowShade'>
                            <a href='https://www.linkedin.com/in/nazaraymond'><FaLinkedin /></a>
                            <a href='https://x.com/TEKNNUKU'><FaSquareXTwitter /></a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-xl text-sm'>Amy Marcella</h1>
                        <p className='text-white'> Co-founder <span className='text-darkShadeB'>and</span> Business Strategist</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>As the Co-Founder and Business Strategist at DXentralized Labs, Amy Marcella brings a wealth of experience in business development and strategy. Her strategic insights drive the growth and success of the GATA Protocol.</p>
                        <div className='flex items-center gap-5 lg:text-3xl text-[20px] text-yellowShade'>
                            <a href='https://www.linkedin.com/in/iamlotus-eth-79163158'><FaLinkedin /></a>
                            <a href='https://x.com/IamLotus2022'><FaSquareXTwitter /></a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-xl text-sm'>Ubongabasi Joseph</h1>
                        <p className='text-white'>Frontend Engineer</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Ubongabasi Joseph is a skilled fullstack engineer dedicated to creating seamless user experiences within the GATA Protocol ecosystem.</p>
                        <div className='flex items-center gap-5 lg:text-3xl text-[20px] text-yellowShade'>
                           <a href='https://linkedin.com/in/iamkavod'><FaLinkedin /></a>
                            <a href='https://x.com/iamkavod_'><FaSquareXTwitter /></a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-xl text-sm'>Audrey Tan</h1>
                        <p className='text-white'>Frontend Engineer</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Audrey Tan is a frontend engineer with a passion for creating intuitive and visually appealing interfaces for GATA Protocol users.</p>
                        <div className='flex items-center gap-5 lg:text-3xl text-[20px] text-yellowShade'>
                           <a href='https://www.linkedin.com/in/audrey-tan-304b57139'><FaLinkedin /></a>
                            <a href=''><FaSquareXTwitter /></a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-xl text-sm'>Aliyu Mustapha Danladi</h1>
                        <p className='text-white'>UI/UX Designer</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Mustapha Aliyu Danladi specializes in UI/UX design, ensuring that every aspect of the GATA Protocol platform is user-friendly and aesthetically pleasing.</p>
                        <div className='flex items-center gap-5 lg:text-3xl text-[20px] text-yellowShade'>
                           <a href='https://www.linkedin.com/in/mustapha-danladi-3122491ba'><FaLinkedin /></a>
                            <a href='https://x.com/Mustee__jr'><FaSquareXTwitter /></a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-xl text-sm'>Kris Webster</h1>
                        <p className='text-white'>Avatar Convention Center Partner (Contract Digital Arts Creator)</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Kris Webster brings creativity and innovation to the GATA Protocol ecosystem as a digital arts creator, enriching the platform with engaging visual content.</p>
                        <div className='flex items-center gap-5 lg:text-3xl text-[20px] text-yellowShade'>
                           <a href='https://www.linkedin.com/in/mrkrobot'><FaLinkedin /></a>
                            <a href='https://x.com/mrkcomment'><FaSquareXTwitter /></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
