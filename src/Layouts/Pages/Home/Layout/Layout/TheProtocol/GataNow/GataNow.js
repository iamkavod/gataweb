import React from 'react';
import { Header } from '../../../../../../Components'
import { GataNow } from '../../../../../../../Assets'

export default function GataNowUI() {

  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section className='py-32'>
        <div className="relative">
          <div className="relative">
            <div className="px-4 py-0 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12 flex justify-center" >
                  <img src={GataNow} alt="The Network" className="lg:w-auto lg:h-80 w-auto h-60" />
                </div>

                <div className='flex flex-col gap-5'>
                  <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center leading-2'>GATANow <br /> Our Logistics Services dApp</h1>
                  <p className='text-darkShadeB text-center lg:text-[20px] text-[12px]'>GATANow is a paradigm shift in the world of logistics and delivery. Our cutting-edge decentralized platform leverages blockchain and artificial intelligence (AI) technologies to revolutionize the logistics and delivery industry. It streamlines and enhances the entire process of moving things of value from point to point. Ensuring users experience the utmost efficiency and reliability when managing shipments.</p>
                  <div className='w-full flex justify-center'>
                    <div className='lg:mt-0 mb-5 rounded-lg spin-btn p-2 border'>
                      <a
                        href='/shipandtrack'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-[20px] text-[12px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        ship/deliver now
                      </a>
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <h1 className='text-yellowShade font-bold lg:text-3xl text-xl'>Features</h1>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Simplified Shipping Processes</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>GATANow leverages self-executing smart contracts, driven by blockchain, to automate and enforce shipping terms and conditions. These contracts establish trust and transparency among all stakeholders in the logistics process.
                      </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Efficient Order Fulfillment</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>We offer real-time tracking of shipments, granting Users the ability to monitor the progress and location of their goods throughout the delivery journey. Visibility and peace of mind are yours at all times.
                      </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-white lg:text-[24] text-[15px]'>Secure Payment Systems</h1>
                      <p className='text-darkShadeB lg:text-[20px] text-[12px]'>Our platform incorporates secure payment systems, safeguarding transactions between users. Through blockchain technology, we facilitate fast and secure payments, reducing the risk of fraud and disputes.
                      </p>
                    </div>
                  </div>

                  <div className='py-5 flex flex-col gap-5'>
                    <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center mb-2'>Benefits for Logistics Partners</h1>
                    <div className='flex justify-center'>
                      <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                        <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Expanded Business Opportunities</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Joining the GATANow ecosystem opens up new business opportunities for logistics partners. Access a network of users, increasing the potential for partnerships and collaborations..</p>
                      </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Streamlined Operations</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>GATANow streamlines logistics operations, reducing manual interventions and optimizing routes. Logistics partners can deliver more efficiently and maintain higher service quality.</p>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Increased Trust</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Blockchain technology and transparent smart contracts enhance trust between logistics partners and clients. Secure and automated transactions build credibility and foster long-term partnerships.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='py-5 flex flex-col gap-5'>
                    <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center mb-2'>Benefits for Users</h1>
                    <div className='flex justify-center'>
                      <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                        <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Faster and More Reliable Deliveries</p>
                        <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>GATANow optimizes the shipping process, cutting delivery times, and guaranteeing faster and more reliable deliveries for users. Decentralized logistics eliminates bottlenecks and delays commonly associated with traditional methods.</p>
                      </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Improved Shipment Visibility</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Our real-time tracking capabilities empower users to monitor shipment progress at any time. Enhanced visibility allows buyers to plan accordingly, reducing the likelihood of missed deliveries.</p>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Reduced Costs</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>GATANow presents cost-saving opportunities for users. By eliminating intermediaries and streamlining logistics, the platform lowers shipping costs, potentially resulting in savings for buyers and broader accessibility to products.</p>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Simplified Shipping Processes</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>GATANow simplifies shipping for users, providing a user-friendly platform for managing and tracking shipments. Automation and real-time tracking minimize the complexities of traditional logistics, saving users time and resources.</p>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='flex flex-col gap-4 lg:w-[500px] w-auto border border-darkShadeB p-12 rounded-lg'>
                          <p className='text-white font-bold lg:text-[24] text-[15px] text-center'>Enhanced Customer Satisfaction</p>
                          <p className='text-darkShadeB lg:text-[20px] text-[12px] text-center'>Faster deliveries, improved visibility, and reliable logistics enhance customer satisfaction. Meeting customer expectations contributes to positive reviews, increased loyalty, and a strong brand reputation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='w-full flex justify-center'>
                    <div className='lg:mt-0 mt-0 rounded-lg spin-btn p-2 border'>
                      <a
                        href='/shipandtrack'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-[20px] text-[12px] font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        ship/deliver now
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
