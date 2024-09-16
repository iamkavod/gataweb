import React from 'react'
import { Header } from '../../../Components'

export default function About() {
    return (
        <main className='bg-darkShadeA'>
            <Header />

            <section className="px-4 py-24 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>About the GATA protocol</h1>
                        <p className='text-darkShadeB'>Welcome to GATA Protocol, where innovation meets decentralization in an e-commerce and logistic ecosystem owned by the community. Here's everything you need to know about us:</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white font-bold lg:text-2xl text-sm'>OUR VISION</h1>
                        <p className='text-darkShadeB lg:text-md text-sm'>GATA Protocol envisions an efficient, reliable, and dynamic community-owned global deCommerce and logistics ecosystem that is inclusive and sustainable for global equity in wealth generation.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white font-bold lg:text-2xl text-xl'>OUR MISSION</h1>
                        <p className='text-darkShadeB lg:text-md text-sm'>GATA Protocol is on a mission to connect businesses and communities from local to global via emerging technologies that allow the exchange of goods and services with ease and low-cost transactions. We will develop decentralized, safe, transparent, and trusted platforms without the need for intermediaries.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white font-bold lg:text-2xl text-xl'>OUR PLATFORM</h1>
                        <p className='text-darkShadeB lg:text-md text-sm'>The GATA Protocol is a community-owned global decentralized Commerce and logistics ecosystem that enables users to buy, sell, and exchange goods and services securely and transparently in a peer-to-peer network. Our platform leverages blockchain technology and smart contracts to create a trustless and censorship-resistant environment for e-commerce and logistics.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white font-bold lg:text-2xl text-xl'>KEY FEATURES</h1>
                        <ul className='list-disc flex flex-col gap-5 ml-10'>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Community Ownership </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>At GATA Protocol, the community is at the heart of everything we do. Our ecosystem is owned and governed by its users, ensuring that decisions are made collectively and in the best interests of the community.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Decentralization </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>At the GATA Protocol, decentralization is at the core of everything we do. Our platform operates on a distributed network, eliminating single points of failure and ensuring censorship-resistant transactions.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Decentralized Marketplace </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>We offer a decentralized marketplace where users can discover products, list items for sale, and make purchases without intermediaries. Smart contracts facilitate secure transactions and enforce trust among participants.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Transparent Logistics </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>Our decentralized logistics framework provides transparency and traceability throughout the supply chain. Users can track the movement of goods, verify authenticity, and ensure the integrity of their shipment transactions.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Privacy and Data Ownership </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>GATA Protocol prioritizes user privacy and data ownership. Users have full control over their personal information and transaction data, with the ability to manage permissions and consent for data sharing.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white font-bold lg:text-2xl text-xl'>OUR VALUES</h1>
                        <ul className='list-disc flex flex-col gap-5 ml-10'>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Decentralization </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>We believe in the power of decentralization to promote fairness, transparency, and autonomy in e-commerce and logistics.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Empowerment </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>We believe in empowering individuals to take control of their digital lives and participate in a decentralized economy.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Community Engagement </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>GATA Protocol values community participation and collaboration. We encourage users to actively contribute to the ecosystem, share feedback, and shape its evolution.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Transparency </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>GATA Protocol operates with transparency and accountability, fostering trust and confidence among its users and stakeholders.</p>
                            </li>
                            <li className='text-white'>
                                <p className='lg:text-xl text-sm font-bold text-white capitalize mb-3'>Innovation </p>
                                <p className='text-darkShadeB lg:text-md text-sm'>We are committed to driving innovation and pushing the boundaries of what's possible in decentralized technology.</p>
                            </li>
                        </ul>
                        <div className='flex flex-col gap-3 my-5'>
                            <h1 className='text-white font-bold lg:text-2xl text-xl'>GET INVOLVED</h1>
                            <p className='text-darkShadeB lg:text-md text-sm'>Join our GATA Protocol community and become part of the decentralized e-commerce and logistics revolution! Whether you're a buyer, seller, logistics service provider, developer, or enthusiast, there's a place for you in our ecosystem. Contribute to projects, share your ideas, explore new opportunities, and help us build a more inclusive and sustainable future for commerce and logistics.</p>
                        </div>
                        <a
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200"
                        >
                            <p className="lg:text-2xl text-sm font-bold leading-5 text-yellowShade">Thank you for choosing GATA Protocol. Together, let's shape the future of decentralized e-commerce and logistics!</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
