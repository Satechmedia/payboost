'use client'

import AboutUs from '@/app/components/Home/AboutUs'
import Features from '@/app/components/Home/Features'
import FinalCTA from '@/app/components/Home/FinalCTA'
import Hero from '@/app/components/Home/Hero'
import Security from '@/app/components/Home/Security'
import Services from '@/app/components/Home/Services'
import Image from 'next/image'
import { useState } from 'react'
import HeroOverlay from '@/public/Images/HeroOverlay.png'



export default function Home() {
  const [mode, setMode] = useState<'pay' | 'crypto'>('pay')
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      <Hero mode={mode} setMode={setMode} />
      <div className="absolute -bottom-54 md:-bottom-28 lg:-bottom-32 left-0 w-full z-20 h-72 md:h-auto pointer-events-none">
        <Image
          src={HeroOverlay}
          alt="Hero Overlay"
          className="w-full h-full object-fill"
          priority
        />
      </div>
      <AboutUs mode={mode} setMode={setMode} />
      <Features mode={mode} setMode={setMode} />
      <Security />
      <Services />
      <FinalCTA />
    </div>
  )
}
