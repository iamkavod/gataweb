import React from 'react'
import { Footer, Header } from '../../Components'
import { HomeBody, HomeHero } from './Layout'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
        <Header />
        <HomeHero />
        <HomeBody />
        <Footer />
    </main>
  )
}
