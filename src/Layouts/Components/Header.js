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
import { RiTeamFill } from "react-icons/ri";
import { LiaTeamspeak } from "react-icons/lia";
import { FcAbout, FcCollaboration } from "react-icons/fc";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdDocument } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";

// Economy Menu
const GATACommunity = [
  { name: 'Join The Community', href: '/jointhecommunity' },
]

const GATAMarket = [
  { name: 'Sell/Buy products', href: '/buyandsellproducts' },
]

const GATANow = [
  { name: 'Ship/Track package', href: '/shipandtrack' },
]

// Token Menu
const GATAMembershipNFTs = [
  { name: 'Get', href: '/get' },
]

const GATAToken = [
  { name: 'Buy/Sell', href: '/buyandsell' },
]

// Resources Menu
const resources = [
  { name: 'RoadMap', href: '/roadmap', icon: GoProjectRoadmap },
  { name: 'Documentations', href: '/documentations', icon: IoMdDocument },
  { name: 'Latest News', href: '/latestnews', icon: IoNewspaperSharp },
  { name: 'Blog', href: '/blog', icon: GrBlog },
]

// More Menu
const more = [
  { name: 'About Us', href: '/about', icon: FcAbout },
  { name: 'The Team', href: '/team', icon: RiTeamFill },
  { name: 'Our Partners', href: '/partners', icon: FcCollaboration },
  { name: 'Conact Us', href: '/contacts', icon: LiaTeamspeak },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      } fixed top-0 w-full z-50`}>
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
          <Popover className="relative">
            <PopoverButton
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-x-1 text-lg font-bold leading-6 text-white focus:outline-none"
            >
              Economy
              <ChevronDownIcon
                aria-hidden="true"
                className={`h-5 w-5 flex-none ${isOpen ? '' : ''}`}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-20 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-darkShadeA shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 grid grid-cols-2 gap-10">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center gap-4 rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    GATA Community
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...GATACommunity].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 px-4 pr-3 text-sm font-bold leading-7 text-white hover:bg-darkShadeC"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center gap-4 rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    GATA Market
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...GATAMarket].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 px-4 pr-3 text-sm font-bold leading-7 text-white hover:bg-darkShadeC"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center gap-4 rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    GATA Now
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...GATANow].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 px-4 pr-3 text-sm font-bold leading-7 text-white hover:bg-darkShadeC"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Tokens */}
          <Popover className="relative">
            <PopoverButton
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-x-1 text-lg font-bold leading-6 text-white focus:outline-none"
            >
              Token
              <ChevronDownIcon
                aria-hidden="true"
                className={`h-5 w-5 flex-none ${isOpen ? '' : ''}`}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-20 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-darkShadeA shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 grid grid-cols-1 gap-10">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center gap-4 rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    GATA Membership NFTs
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...GATAMembershipNFTs].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 px-4 pr-3 text-sm font-bold leading-7 text-white hover:bg-darkShadeC"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center gap-4 rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    GATA Token
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...GATAToken].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 px-4 pr-3 text-sm font-bold leading-7 text-white hover:bg-darkShadeC"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </PopoverPanel>
          </Popover>

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
          <div className="mt-6 flow-root px-1">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Economy */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    Economy
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <Disclosure as="div" className="ml-1">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                        GATA Community
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...GATACommunity].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                          >
                            {/* <Link
                          href={item.href}
                          className="block w-full h-full"
                        >
                          {item.name}
                        </Link> */}
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="ml-1">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                        GATA Market
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...GATAMarket].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="ml-1">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                        GATA Now
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...GATANow].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  </DisclosurePanel>
                </Disclosure>
                {/* Token */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    Token
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <Disclosure as="div" className="ml-1">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                        GATA Membership NFTs
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...GATAMembershipNFTs].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="ml-1">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                        GATA Token
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...GATAToken].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  </DisclosurePanel>
                </Disclosure>

                {/* Resources */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    Resources
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {/* More */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-white">
                    More
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...more].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href={'/contact'}
                  class="flex lg:hidden items-center justify-center h-12 px-8 font-bold text-lg tracking-wide text-whiteShade transition duration-200 shadow-md bg-yellowShade hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-lg"
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
