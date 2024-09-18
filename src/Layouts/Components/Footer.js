import React from 'react'
import { FaLinkedin, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <main>
      <footer className="px-4 pt-16 mx-auto max-w-[1443px] md:px-24 lg:px-0">
        <div className="flex lg:flex-row justify-between flex-col gap-4">
          <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-[15px]">
              Products
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-[15px]">
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-[15px]">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  Copyright Information
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-[15px]">
              Contact Us
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 lg:text-lg text-[12px]"
                >
                  hello@gataprotocol.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-10 pt-10 pb-10 border-t lg:flex-row">
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-10 h-10 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaLinkedin />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-10 h-10 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaSquareXTwitter />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-10 h-10 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaFacebookSquare />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-10 h-10 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaInstagramSquare />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-10 h-10 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <BsDiscord />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-10 h-10 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaTelegram />
              </a>
            </div>
          </div>
      </footer>
    </main>
  )
}
