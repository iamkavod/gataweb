import React, { useEffect, useState, useRef } from 'react';
import { Community, Dropdown, Ease, GataMarket, GataNow, GataTokenomics, HomeHeroImg, ProtocolBg, Secure, TheNetwork } from '../../../../Assets'

export default function Body() {
  const [isVisible, setIsVisible] = useState({ textVisible: false, imageVisible: false });

  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Accordion
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="rounded-lg shadow-sm bg-darkShadeC">
        <button
          type="button"
          aria-label="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="lg:text-xl text-sm text-start font-bold capitalize">{title}</p>
          <div className="flex items-center justify-center w-8 h-8">
            <img src={Dropdown} alt='Dropdown' className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
              }`} />
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-white lg:text-xl text-sm text-start">{children}</p>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const textPosition = textRef.current.getBoundingClientRect().top;
      const imagePosition = imageRef.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (textPosition < screenPosition && !isVisible.textVisible) {
        setIsVisible((prevState) => ({ ...prevState, textVisible: true }));
      }

      if (imagePosition < screenPosition && !isVisible.imageVisible) {
        setIsVisible((prevState) => ({ ...prevState, imageVisible: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <main className='bg-darkShadeA h-full'>
      {/* Features */}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h6 className="font-bold leading-5 text-yellowShade text-xl lg:text-3xl uppercase font-bruno text-center mb-20 mt-20">Our Features</h6>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">

          {/* Ease To Use */}
          <div className="p-px overflow-hidden transition duration-300 transform rounded-lg shadow-sm hover:scale-105 group hover:shadow-xl h-[350px] bg-white">
            <div className="relative p-5 bg-white rounded-sm flex flex-col justify-center items-center">
              <div className="flex justify-center flex-col items-center lg:flex-row border-2 border-yellowShade rounded-full w-24 h-24 mb-5">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-darkShadeA p-4 lg:mb-0">
                  <img src={Ease} alt='ease' className='spin' />
                </div>
              </div>
              <h6 className="font-semibold leading-5 text-center mb-5">EASE OF USE</h6>
              <p className="mb-2 text-lg text-darkShadeA text-center">
                Our platform streamlines the sales and logistics process, eliminating the need for middlemen and reducing transaction costs.
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="overflow-hidden transition duration-300 transform rounded-lg shadow-sm hover:scale-105 group hover:shadow-xl h-[350px] bg-white">
            <div className="relative p-5 bg-white rounded-sm flex flex-col justify-center items-center">
              <div className="flex justify-center flex-col items-center lg:flex-row border-2 border-yellowShade rounded-full w-24 h-24 mb-5">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-darkShadeA p-4 lg:mb-0">
                  <img src={Community} alt='ease' className='spin' />
                </div>
              </div>
              <h6 className="font-semibold leading-5 text-center mb-5">Community led growth</h6>
              <p className="mb-2 text-lg text-darkShadeA text-center">
                Connect with potential buyers and sellers from around the world, expanding your reach and opening up new opportunities for growth.
              </p>
            </div>
          </div>

          {/* Secure */}
          <div className="overflow-hidden transition duration-300 transform rounded-lg shadow-sm hover:scale-105 group hover:shadow-xl h-[350px] bg-white">
            <div className="relative p-5 bg-white rounded-sm flex flex-col justify-center items-center">
              <div className="flex justify-center flex-col items-center lg:flex-row border-2 border-yellowShade rounded-full w-24 h-24 mb-5">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-darkShadeA p-4 lg:mb-0">
                  <img src={Secure} alt='ease' className='spin' />
                </div>
              </div>
              <h6 className="font-semibold leading-5 text-center mb-5">secure payment</h6>
              <p className="mb-2 text-lg text-darkShadeA text-center">
                Conduct transactions with confidence, knowing that your payments are secure and transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol */}
      <section>
        <div className="relative">
          <img
            src={ProtocolBg}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-darkShadeA bg-opacity-30">
            <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-20">
              <h6 className="font-bold leading-5 text-yellowShade text-xl lg:text-3xl uppercase font-bruno text-center mb-20 mt-20">The Protocol</h6>
              <div className="flex lg:flex-col flex-col-reverse items-center justify-between xl:flex-row">
                <div
                  ref={textRef}
                  className={`w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ${isVisible.textVisible ? 'slide-in-left' : 'hidden'
                    }`}
                >
                  <h2 className="max-w-lg mb-6 font-sans lg:text-3xl text-xl lg:text-start text-center font-bold tracking-tight text-yellowShade sm:text-4xl sm:leading-none uppercase">
                    GATA Network
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-white md:text-lg lg:text-xl text-sm lg:text-start text-center">
                    Join our exclusive, members-only community where together we drive the dCommerce ecosystem forward by collaborating, networking, and governing the ecosystem as like-minded users.
                  </p>
                  <div className='w-full flex lg:justify-start justify-center'>
                    <div className='lg:mt-0 mt-10 rounded-lg spin-btn p-2 border border-blue-200'>
                      <a
                        href='/gatabusinessnetwork'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  ref={imageRef}
                  className={`w-full max-w-xl xl:px-8 xl:w-5/12 lg:block flex justify-center ${isVisible.imageVisible ? 'slide-in-right' : 'hidden'
                    }`}
                >
                  <img src={TheNetwork} alt="The Network" className='lg:w-auto lg:h-auto w-auto h-44' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gata Market */}
      <section>
        <div className="relative">
          <div className="relative bg-white">
            <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div
                  ref={textRef}
                  className={`w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ${isVisible.textVisible ? 'slide-in-left' : 'hidden'
                    }`}
                >
                  <h2 className="max-w-lg mb-6 font-sans lg:text-3xl text-xl lg:text-start text-center font-bold tracking-tight text-yellowShade sm:text-4xl sm:leading-none uppercase">
                    GATA Market
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-black md:text-lg lg:text-xl text-sm lg:text-start text-center">
                    Join our exclusive, members-only community where together we drive the dCommerce ecosystem forward by collaborating, networking, and governing the ecosystem as like-minded users.
                  </p>
                  <div className='w-full flex lg:justify-start justify-center'>
                    <div className='lg:mt-0 mt-10 rounded-lg spin-btn p-2 border-2'>
                      <a
                        href='/gatamarket'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  ref={imageRef}
                  className={`w-full max-w-xl xl:px-8 xl:w-5/12 lg:block flex justify-center ${isVisible.imageVisible ? 'slide-in-right' : 'hidden'
                    }`}
                >
                  <img src={GataMarket} alt="The Network" className='lg:w-auto lg:h-auto w-auto h-44' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gata Now */}
      <section>
        <div className="relative">
          <img
            src={ProtocolBg}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-darkShadeA bg-opacity-30">
            <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-20">
              <div className="flex lg:flex-col flex-col items-center justify-between xl:flex-row">
                <div
                  ref={textRef}
                  className={`w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ${isVisible.textVisible ? 'slide-in-left' : 'hidden'
                    }`}
                >
                  <h2 className="max-w-lg mb-6 font-sans lg:text-3xl text-xl lg:text-start text-center font-bold tracking-tight text-yellowShade sm:text-4xl sm:leading-none uppercase">
                    GATA Now
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-white md:text-lg lg:text-xl text-sm lg:text-start text-center">
                    Join our exclusive, members-only community where together we drive the dCommerce ecosystem forward by collaborating, networking, and governing the ecosystem as like-minded users.
                  </p>
                  <div className='w-full flex lg:justify-start justify-center'>
                    <div className='lg:mt-0 mt-10 rounded-lg spin-btn p-2 border border-blue-200'>
                      <a
                        href='/gatanow'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  ref={imageRef}
                  className={`w-full max-w-xl xl:px-8 xl:w-5/12 lg:block flex justify-center ${isVisible.imageVisible ? 'slide-in-right' : 'hidden'
                    }`}
                >
                  <img src={GataNow} alt="The Network" className='lg:w-auto lg:h-auto w-auto h-44' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gata Tokenomics */}
      <section>
        <div className="relative">
          <div className="relative bg-white">
            <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div
                  ref={textRef}
                  className={`w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ${isVisible.textVisible ? 'slide-in-left' : 'hidden'
                    }`}
                >
                  <h2 className="max-w-lg mb-6 font-sans lg:text-3xl text-xl lg:text-start text-center font-bold tracking-tight text-yellowShade sm:text-4xl sm:leading-none uppercase">
                    GATA Tokenomics
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-black md:text-lg lg:text-xl text-sm lg:text-start text-center">
                    Join our exclusive, members-only community where together we drive the dCommerce ecosystem forward by collaborating, networking, and governing the ecosystem as like-minded users.
                  </p>
                  <div className='w-full flex lg:justify-start justify-center'>
                    <div className='lg:mt-0 mt-10 rounded-lg spin-btn p-2 border-2'>
                      <a
                        href='/gatacoin'
                        className="inline-flex items-center justify-center w-full lg:h-12 h-8 lg:px-20 px-10 lg:text-xl text-sm font-bold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellowShade focus:shadow-outline focus:outline-none"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  ref={imageRef}
                  className={`w-full max-w-[1443px] xl:px-8 xl:w-5/12 lg:flex lg:justify-end flex justify-center ${isVisible.imageVisible ? 'slide-in-right' : 'hidden'
                    }`}
                >
                  <img src={GataTokenomics} alt="The Network" className='lg:w-auto lg:h-[400px] w-auto h-44' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section class="px-4 py-16 mx-auto max-w-screen-[1443px] md:px-24 lg:px-8 lg:py-20">
        <div class="sm:mx-auto max-w-[1443px]">
          <div class="flex flex-col mb-16 sm:text-center">
            <div class="max-w-[1443px] md:mx-auto sm:text-center">
              <h2 class="max-w-[1443px] mb-6 font-sans lg:text-xl text-sm lg:text-start text-center font-bold leading-none tracking-tight text-yellowShade md:mx-auto uppercase font-bruno">
                why join THE gata protocol?
              </h2>
            </div>
          </div>
          <div class="space-y-4">
            <Item title="Connect Globally">
              At the GATA Protocol, we believe in the power of connection. Our platform seamlessly connects buyers and sellers from across the globe, breaking down barriers and creating a truly global marketplace. Whether you're a small business looking to expand your reach or an individual searching for unique products, GATA Protocol brings the world to your fingertips. Join our community and discover a world of opportunities.
            </Item>
            <Item title="ownership & control">
              At GATA Protocol, we believe you should have full ownership and control over your digital assets. Our decentralized approach means you control your data and transactions, not third-party intermediaries. Take charge of your online presence and assets with GATA Protocol, where ownership is a right, not a privilege.
            </Item>
            <Item title="trusted platform">
              In a world where trust is paramount, GATA Protocol stands as a beacon of reliability. We partner with trusted platforms and businesses to enhance your shopping and logistical experiences. When you choose GATA Protocol, you're not just choosing a marketplace – you're choosing a network of reputable and dependable partners dedicated to your satisfaction.
            </Item>
            <Item title="empowering individuals & businesses">
              We're not just a platform; we're a community. GATA Protocol empowers individuals and businesses alike to thrive in the digital age. Whether you're a budding entrepreneur or a seasoned business owner, our ecosystem offers the tools and support you need to succeed. Join us and unleash your full potential.
            </Item>
            <Item title="advanced security">
              Your safety is our priority. GATA Protocol employs cutting-edge security measures to protect your transactions and personal information. We utilize blockchain technology to ensure the integrity of every transaction, making fraud and data breaches a thing of the past. Trust in a platform that goes above and beyond to safeguard your digital assets and privacy.
            </Item>
            <Item title="transparent transactions">
              Transparency breeds trust. GATA Protocol leverages blockchain technology to make every transaction transparent and tamper-proof. Say farewell to hidden fees and murky processes. With us, you'll have a clear view of pricing, shipping costs, and more. Shop with confidence, knowing that transparency is at the heart of every transaction.
            </Item>
            <Item title="decentralized & decisive">
              Decentralization means you have a say At GATA Protocol, we value your voice. Our decentralized governance model empowers you to participate in decision-making, ensuring that the platform evolves according to your needs. Be part of a community that is decisive, democratic, and dedicated to your vision of success.
            </Item>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section>
        <div className="relative">
          <div className="relative bg-darkShadeA bg-opacity-30 max-w-[1443px] flex justify-center items-center w-full mx-auto">
            <div className='flex justify-center'>
              <img
                src={HomeHeroImg}
                className="absolute inset-0 object-cover lg:w-auto lg:h-96 mx-auto"
                alt=""
              />
            </div>
            <form className='w-full z-50 lg:px-0 px-4 lg:pt-10 pb-10 pt-0 lg:pb-32'>
              <div className="flex flex-col gap-10 w-full">
                <div className='flex gap-10'>
                  <input
                    placeholder="Enter your name"
                    required=""
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-darkShadeC rounded-lg shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white input placeholder:lg:text-xl placeholder:text-xs"
                  />
                  <input
                    placeholder="Enter your email address"
                    required=""
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-darkShadeC rounded-lg shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white input placeholder:lg:text-xl placeholder:text-xs"
                  />
                </div>
                <textarea  className='flex-grow w-full h-40 p-4 mb-3 transition duration-200 bg-darkShadeC rounded-lg shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white input placeholder:lg:text-xl placeholder:text-xs' placeholder='Type your message here..'></textarea>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 w-full font-bold tracking-wide text-black transition duration-200 rounded shadow-md bg-yellowShade focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}