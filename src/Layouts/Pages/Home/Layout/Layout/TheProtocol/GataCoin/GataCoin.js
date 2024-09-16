import React from 'react'
import { Header } from '../../../../../../Components'
import { GataTokenomics } from '../../../../../../../Assets'

export default function GataCoin() {
  return (
    <main className='bg-darkShadeA'>
      <Header />

      <section>
        <section>
          <div className="relative">
            <div className="relative">
              <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-32">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="w-full max-w-[1443px] xl:px-8 xl:w-5/12 flex justify-center"
                  >
                    <img src={GataTokenomics} alt="The Network" className='lg:w-auto lg:h-[400px] w-auto h-44 spin-image' />
                  </div>
                </div>
                <div className='flex flex-col gap-5 pt-10'>
                  <h1 className='text-yellowShade font-bold lg:text-3xl text-xl text-center'>GATA Tokenomics</h1>
                  <p className='text-darkShadeB text-center'>GATA Protocol employs Blockchain tokens to govern access, utility, distribution, and value. The tokenomics involve mechanisms for token supply, distribution, governance, rewards and incentives. These elements work together to ensure the sustainability, growth, and decentralization of the ecosystem.</p>
                  <div className='w-full flex justify-center'>
                    <div className='lg:mt-0 mt-10 rounded-lg spin-btn p-2 border'>
                      <a
                        href='/'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Own a token now
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-3 pt-10'>
                  <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>GATA Membership NFTs</h1>
                  <p className='text-darkShadeB lg:text-md text-sm'>GATA Membership NFTs are your keys to access particular ecosystem services and to unlock exclusive benefits and privileges within the GATA Protocol Ecosystem. It represents your active participation and commitment in the community.</p>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Concept</h1>
                    <p className='text-darkShadeB lg:text-md text-sm'>A Time-bound Non-Fungible Tokens (NFTs) representing annual co-operative membership access and governance rights within the ecosystem.</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Membership Plans</h1>
                    <p className='text-darkShadeB lg:text-md text-sm '>We have different tiers of membership NFTs plan available with varying benefits and durations, such as:</p>
                    <ul className='list-disc flex flex-col gap-5 ml-6'>
                      <li className='text-darkShadeB'>Bronze</li>
                      <li className='text-darkShadeB'>Silver (TBA)</li>
                      <li className='text-darkShadeB'>Gold (TBA)</li>
                    </ul>
                  </div>
                </div>

                <div className='flex flex-col gap-3 py-5'>
                  <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>Benefits of GATA Membership</h1>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Access To Exclusive Features</h1>
                    <p className='text-darkShadeB lg:text-md text-sm'>Enjoy special features and early access to new developments within the ecosystem.</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Community Influence</h1>
                    <p className='text-darkShadeB lg:text-md text-sm'>Influence ecosystem decisions through participation in governance and discussions.</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Discounts and Rewards</h1>
                    <p className='text-darkShadeB lg:text-md text-sm'>Receive discounts on platform fees and exclusive rewards.</p>
                  </div>
                </div>

                <div className='flex flex-col gap-3 py-5'>
                  <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>To Get GATA Membership NFT</h1>
                  <p className='text-darkShadeB lg:text-md text-sm'>Acquiring a GATA Membership NFT is a prestigious step into our community.</p>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Purchase</h1>
                    <p className='text-darkShadeB lg:text-md text-sm'>Keep an eye out for GATA Membership NFT sales on our platform or partner marketplaces.</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Engage</h1>
                    <p className='text-darkShadeB lg:text-md text-sm'>Actively engage in our community, demonstrate commitment, and you might be selected for a GATA Membership NFT drop.</p>
                  </div>
                </div>

                <div className='flex flex-col gap-3 pt-10'>
                  <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>GATA Token</h1>
                  <p className='text-darkShadeB lg:text-md text-sm'>GATA Membership NFTs are your keys to access particular ecosystem services and to unlock exclusive benefits and privileges within the GATA Protocol Ecosystem. It represents your active participation and commitment in the community.</p>
                </div>

                <div className='flex flex-col gap-3 pt-10'>
                  <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>GATA Membership NFTs</h1>
                  <p className='text-darkShadeB lg:text-md text-sm'>The GATA Token serves as the native utility token within the decentralized eCommerce and logistics ecosystem of the GATA Protocol. It is designed to facilitate transactions, incentivize participation, and power various services within the platform. This document outlines the comprehensive tokenomics of the GATA Token, detailing its distribution, use cases, governance, initial token price, initial market capitalization, and other relevant information.</p>

                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Token Details</h1>
                    <div className='flex flex-col gap-5'>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Token Name</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>GATA Token</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Symbol:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>GATA</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Initial supply:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>100,000,000 GATA</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Total supply:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>Not fixed</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Token type:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>ERC-20</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Decimal:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>18</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Blockchain:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>Optimism</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Initial token price:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>$0.0005 per GATA</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>initial market capitalization:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>$50,000(based on the circulating supplyat lunch)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold lg:text-lg text-sm'>Token Details</h1>
                    <div className='flex flex-col gap-5'>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Token Name</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>GATA Token</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Symbol:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>GATA</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Initial supply:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>100,000,000 GATA</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>Total supply:</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>Not fixed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>Token Use Cases</h1>
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-5'>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>For Ecosystem Currency</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>GATA Tokens are used to pay for products and services fees within the GATA Protocol ecosystem.</li>
                        </ul>
                      </div>
                      <div className='gap-2'>
                        <p className='text-white font-bol lg:text-md text-xs'>For Incentives & Rewards</p>
                        <ul className='list-disc flex flex-col gap-5 ml-6'>
                          <li className='text-darkShadeB'>Users earn GATA Tokens as rewards or compensation within the ecosystem.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h1 className='text-yellowShade font-bold lg:text-2xl text-xl'>Token Distribution</h1>

                    <div className='flex flex-col gap-3'>
                      <div className='flex flex-col gap-5'>
                        <div>
                          <p className='text-white font-bol lg:text-md text-xs'>Community and Ecosystem Growth Fund 5%</p>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Allocation:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>500,000,000 GATA Tokens</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Purpose:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Incentivize user participation, reward contributors, and foster ecosystem growth.</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Control:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Managed by a multi-signature (multi-sig) wallet controlled by community members and team members.</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <p className='text-white font-bol lg:text-md text-xs'>Liquidity and Exchanges Funds 60%</p>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Allocation:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>6,000,000,000 GATA Tokens</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Purpose:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Provide liquidity on decentralized exchanges (DEXs) and facilitate exchange listings.</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Control:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Managed by a separate multi-sig wallet controlled by community and team members.</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <p className='text-white font-bol lg:text-md text-xs'>Development Funds 25%</p>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Allocation:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>2,500,000,000 GATA Tokens</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Purpose:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Locked with vesting schedules to ensure gradual release.</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Vesting Schedule:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-white'>Year 1: <span className='text-darkShadeB'>95% locked</span></li>
                              <li className='text-white'>Year 2: <span className='text-darkShadeB'>10% unlocked</span></li>
                              <li className='text-white'>Years 3-6: <span className='text-darkShadeB'>21.25% unlocked annually</span></li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <p className='text-white font-bol lg:text-md text-xs'>Reserve Fund 10%</p>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Allocation:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>1,000,000,000 GATA Tokens</li>
                            </ul>
                          </div>
                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Purpose:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Reserved for unforeseen circumstances and future developments in the ecosystem.</li>
                            </ul>
                          </div>

                          <div className='gap-2'>
                            <p className='text-white font-bol lg:text-md text-xs'>Control:</p>
                            <ul className='list-disc flex flex-col gap-5 ml-6'>
                              <li className='text-darkShadeB'>Locked for 10 years.</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className='w-full flex justify-center'>
                    <div className='lg:mt-3 mt-3 rounded-lg spin-btn p-2 border'>
                      <a
                        href='/'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Own a token now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
