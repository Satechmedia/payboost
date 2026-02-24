'use client'

import AboutUs from '@/app/components/Home/AboutUs'
import Features from '@/app/components/Home/Features'
import FinalCTA from '@/app/components/Home/FinalCTA'
import Hero from '@/app/components/Home/Hero'
import Security from '@/app/components/Home/Security'
import Services from '@/app/components/Home/Services'
import { useState } from 'react'

export default function Home() {
  const [mode, setMode] = useState<'pay' | 'crypto'>('pay')
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      <Hero mode={mode} setMode={setMode} />
      <AboutUs mode={mode} setMode={setMode} />
      <Features />
      <Security />
      <Services />
      <FinalCTA />
    </div>
  )
}
