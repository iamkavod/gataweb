'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { GataLogo } from '../../Assets'
import { RiTeamFill, RiCommunityFill } from "react-icons/ri";
import { LiaTeamspeak, LiaLandmarkSolid } from "react-icons/lia";
import { FcAbout, FcCollaboration } from "react-icons/fc";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdDocument } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import { FaShip } from "react-icons/fa";
import { MdRememberMe } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";

// MENU
// Economy Menu
const economy = [
  { name: 'GATA Community', href: '/jointhecommunity', icon: RiCommunityFill },
  { name: 'GATAMARKET', href: '/buyandsellproducts', icon: LiaLandmarkSolid },
  { name: 'GATANow', href: '/shipandtrack', icon: FaShip },
]

// Token Menu
const token = [
  { name: 'GATA Membership NFTs', href: '/get', icon: MdRememberMe },
  { name: 'GATA Token', href: '/buyandsell', icon: FaCoins },
]

// Resources Menu
const resources = [
  { name: 'RoadMap', href: '/roadmap', icon: GoProjectRoadmap },
  { name: 'Documentations', href: 'https://docs.gataprotocol.org/', icon: IoMdDocument },
  { name: 'Latest News', href: '/latestnews', icon: IoNewspaperSharp },
  { name: 'Blog', href: 'https://gataprotocol.medium.com/', icon: GrBlog },
]

// More Menu
const more = [
  { name: 'About Us', href: '/about', icon: FcAbout },
  { name: 'The Team', href: '/team', icon: RiTeamFill },
  { name: 'Our Partners', href: '/partners', icon: FcCollaboration },
  { name: 'Contact Us', href: '/contacts', icon: LiaTeamspeak },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleDisclosureClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setHasScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-${hasScrolled ? "darkShadeA" : "darkShadeA"
      } fixed top-0 w-full z-[100] overflow-x-hidden`}>
      <nav aria-label="Global" className="mx-auto flex max-w-[1443px] items-center justify-between py-6 px-2 md:px-5 lg:px-8">
        <div className="flex">
          <a
            href="/"
            aria-label="GataProtocol"
            class="inline-flex items-center"
          >
            <img src={GataLogo} alt="Logo" className="lg:w-40 lg:h-auto w-[100px]" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
          {/* Economy */}
          <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-white focus:outline-none">
                Economy
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-white" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-darkShadeA shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {economy.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-darkShadeC"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primaryColor" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-bold text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* Tokens */}
          <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-white focus:outline-none">
                Token
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-white" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-darkShadeA shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {token.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-darkShadeC"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primaryColor" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-bold text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* Resources */}
          <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-white focus:outline-none">
                Resources
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-white" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-darkShadeA shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-darkShadeC"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primaryColor" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-bold text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* More */}
          <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-white focus:outline-none">
                More
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-white" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-darkShadeA shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {more.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-darkShadeC"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primaryColor" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-bold text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
        </PopoverGroup>
        <a
          href={'/contact'}
          class="hidden lg:flex items-center justify-center h-12 px-8 font-bold text-lg tracking-wide text-black transition duration-200 shadow-md bg-yellowShade hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-lg"
          aria-label="Contact Us"
        >
          Lunch
        </a>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden overflow-x-hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-darkShadeA px-2 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              aria-label="Yiieldy"
              title="Yiieldy"
              class="inline-flex items-center"
            >
              <img src={GataLogo} alt="Logo" className="w-[100px]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="-my-6 divide-y divide-gray-500/10 px-1">
            <div className="space-y-2 py-6">
              <div className="space-y-2 py-6">
                {/* Economy */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white cursor-pointer ${openIndex === 0 ? 'no-underline' : 'underline'}`}
                    onClick={() => handleDisclosureClick(0)}
                  >
                    Economy
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 0 && (
                    <div className="mt-2 space-y-1">
                      {economy.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-0 pl-6 pr-3 text-sm font-bold leading-7 text-white underline"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Token */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white cursor-pointer ${openIndex === 1 ? 'no-underline' : 'underline'}`}
                    onClick={() => handleDisclosureClick(1)}
                  >
                    Token
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 1 && (
                    <div className="mt-2 space-y-2">
                      {token.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white underline"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white cursor-pointer ${openIndex === 2 ? 'no-underline' : 'underline'}`}
                    onClick={() => handleDisclosureClick(2)}
                  >
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 2 && (
                    <div className="mt-2 space-y-2">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white underline"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* More */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white cursor-pointer ${openIndex === 3 ? 'no-underline' : 'underline'}`}
                    onClick={() => handleDisclosureClick(3)}
                  >
                    More
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 3 && (
                    <div className="mt-2 space-y-2">
                      {more.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white underline"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <a
                  href="/contact"
                  className="hidden items-center justify-center h-12 px-8 font-bold text-lg tracking-wide text-whiteShade transition duration-200 shadow-md bg-yellowShade hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-lg"
                  aria-label="Contact Us"
                >
                  Lunch
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
