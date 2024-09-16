import React from 'react'
import { Header } from '../../../../Components'
import { FractalCube } from '../../../../../Assets'

export default function Framework() {
    return (
        <main className='bg-darkShadeA'>
            <Header />

            <section className="flex flex-col items-center justify-center px-2 pt-32 mx-auto max-w-[1443px] md:px-0">
                <img
                    src={FractalCube}
                    className="w-full max-w-screen-sm mx-auto rounded md:w-auto lg:max-w-screen-lg bounce"
                    alt=""
                />
                <div className='lg:mt20 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-5 text-center'>Our Framework</h1>
                    <p className='text-darkShadeB lg:text-xl text-sm text-center lg:w-[1100px]'>At GATA Protocol, we are committed to revolutionizing the eCommerce and logistics landscape by leveraging cutting-edge technologies to address trust-related challenges. Our decentralized eCommerce and logistics ecosystem incorporates blockchain, smart contracts, Web3, AI, AR, and VR, all working in harmony to provide you with a secure and transparent shopping experience. Here's how we harness the power of these technologies.</p>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>Blockchain Technology</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Transparency and Trust
                                        </h6>
                                        <p className="text-sm text-white">
                                            We utilize blockchain technology to create transparent and immutable records of transactions. This ensures trust in the history of products, orders, shipment and payments.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Supply Chain Transparency
                                        </h6>
                                        <p className="text-sm text-white">
                                            Blockchain allows us to track the origin and journey of products or shipments, assuring users of authenticity and quality. Say goodbye to counterfeit concerns.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>Smart Contracts</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Automated Transactions
                                        </h6>
                                        <p className="text-sm text-white">
                                            Smart contracts automate product listing. our liaising payments and order fulfillment, reducing the risk of fraud and disputes. Enjoy seamless and secure transactions.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Trustless Escrow
                                        </h6>
                                        <p className="text-sm text-white">
                                            We employ escrow smart contracts to hold payments until the receiving parties approve of their purchases and shipments. Trust is no longer an issue.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>Web3</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Decentralized Platforms
                                        </h6>
                                        <p className="text-sm text-white">
                                            Our eCommerce and logistics platforms are built on Web3 technologies, giving users greater control over their data and transactions. Your data, your rules.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            User Sovereignty
                                        </h6>
                                        <p className="text-sm text-white">
                                            We empower users to own and control their personal data, enhancing trust in the platform. Your privacy matters.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>AI (Artificial Intelligence)</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Personalization
                                        </h6>
                                        <p className="text-sm text-white">
                                            AI algorithms provide personalized product recommendations, improving your shopping experience. Find what you love effortlessly.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Fraud Detection
                                        </h6>
                                        <p className="text-sm text-white">
                                            We use AI to detect and prevent fraudulent activities, enhancing security and trust. Your safety is our priority.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>AR (Augmented Reality) and VR (Virtual Reality)</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Virtual Try-On
                                        </h6>
                                        <p className="text-sm text-white">
                                            Try on products virtually using AR/VR, reducing uncertainty about product quality and fit. Shop with confidence.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Virtual Shopping Environments
                                        </h6>
                                        <p className="text-sm text-white">
                                            Immerse yourself in our VR shopping experiences, increasing user engagement and trust in the platform.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>Safety</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Decentralized Identity Verification
                                        </h6>
                                        <p className="text-sm text-white">
                                            We employ blockchain-based identity solutions to verify the identity of sellers and buyers, reducing the risk of fraudulent accounts.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            User Reviews and Ratings
                                        </h6>
                                        <p className="text-sm text-white">
                                            Leveraging blockchain, we create a tamper-proof review system, ensuring the authenticity of user feedback. Trust the wisdom of the crowd.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-10 mt-12 rounded-lg p-2 flex flex-col justify-center'>
                    <h1 className='text-yellowShade lg:text-3xl text-xl mb-1 text-center'>community led growth( CLG )</h1>
                    <div className="py-5 max-w-[1443px] lg:px-8 px-2">
                        <div className="grid max-w-[1443px] gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Community Governance
                                        </h6>
                                        <p className="text-sm text-white">
                                            Our decentralized governance model empowers users to have a democratized say in the ecosystem's rules, growth, and policies. Trust and fairness are at the core.
                                        </p>
                                    </div>

                                </div>
                            </a>
                            <a

                                aria-label="View item"
                                className="relative block p-px overflow-hidden transition duration-300 border border-darkShadeB transform rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                            >
                                <div className="relative flex items-center justify-between p-5 bg-darkShadeA rounded-sm">
                                    <div className="text-center">
                                        <h6 className="mb-2 font-bold leading-5 text-white">
                                            Education and Transparency
                                        </h6>
                                        <p className="text-sm text-white">
                                            GATA Protocol is committed to educating users about the benefits of blockchain and decentralized technologies, increasing their confidence in the ecosystem. Trust through knowledge.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}
