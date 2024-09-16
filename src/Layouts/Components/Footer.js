import React from 'react'
import { FaLinkedin, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <main>
      <div className="px-4 pt-16 mx-auto max-w-[1443px] md:px-24 lg:px-0">
        <div className="flex lg:flex-row justify-between flex-col">
          <div>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-xl">
              Products
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-xl">
              Company
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-xl">
              Legal
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Copyright Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold tracking-wide text-yellowShade uppercase lg:text-3xl text-xl">
              Contact Us
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  hello@gataprotocol.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-10 pt-10 pb-10 border-t lg:flex-row">
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-8 h-8 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaLinkedin />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-8 h-8 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaSquareXTwitter />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-8 h-8 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaFacebookSquare />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-8 h-8 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaInstagramSquare />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-8 h-8 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <BsDiscord />
              </a>
            </div>
            <div className="text-center border-4 border-yellowShade rounded-full lg:w-20 lg:h-20 w-8 h-8 flex justify-center items-center">
              <a href='/' className="flex items-center justify-center lg:w-16 lg:h-16 mx-auto rounded-full bg-darkShadeA w-6 h-6 text-yellowShade lg:text-3xl text-xs">
                <FaTelegram />
              </a>
            </div>
          </div>
      </div>
    </main>
  )
}
