'use client'

import Image from 'next/image'
import Line from '@/app/components/shared/Line'
import AppStore from '@/public/Images/AppStore.png'
import GooglePlay from '@/public/Images/GooglePlay.png'
import HeroBG from '@/public/Images/Hero BG.png'
import { contents } from '@/app/data/contents'
// import HeroOverlay from '@/public/Images/HeroOverlay.png'

interface HeroProps {
  mode: 'pay' | 'crypto'
  setMode: (mode: 'pay' | 'crypto') => void
}

export default function Hero({ mode, setMode }: HeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden w-full lg:max-h-screen py-12">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroBG}
          alt="Background Pattern"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative grid lg:grid-cols-2 w-full px-6 pt-8 md:py-16 h-full">
        {/* LEFT COLUMN: Content */}
        <div className="relative flex items-center w-full lg:pl-16 z-30">
          <div className="flex flex-col  w-full">
            {/* TOGGLE BUTTONS */}
            <div className="flex gap-2 mb-3 bg-[#0F3147] p-1 rounded-full justify-center w-fit mx-auto lg:mx-0 border border-foreground/10">
              <button
                onClick={() => setMode('pay')}
                className={`px-6 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  mode === 'pay'
                    ? 'bg-primary text-foreground shadow-lg'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                Pay
              </button>
              <button
                onClick={() => setMode('crypto')}
                className={`px-6 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  mode === 'crypto'
                    ? 'bg-primary text-foreground shadow-lg'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                Crypto
              </button>
            </div>

            <div className="flex gap-2 bg-[#2E4A5D] p-2 rounded-full justify-center w-fit mx-auto lg:mx-0 mb-4">
              <span className="text-[10px] md:text-xs font-medium">
                🔥 100% TRUSTED PLATFORM
              </span>
            </div>

            <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-[-5%] font-syne text-center lg:text-left uppercase transition-all duration-500">
              {contents[mode].title}
              <br className="hidden lg:inline" />
              <span className="text-[#E2FF54]">
                {' '}
                {contents[mode].highlight}
              </span>
            </h1>
            <p className="w-full max-w-87.5 text-xs md:text-sm mt-2 font-normal text-center mx-auto lg:mx-0 lg:text-left font-poppins text-foreground/80 min-h-10">
              {contents[mode].description}
            </p>

            <div className="pt-6 relative flex flex-col w-full max-w-md mx-auto lg:mx-0 items-center lg:items-start">
              {/* Store Buttons */}
              <div className="flex flex-row items-center gap-4 mt-0">
                <Image
                  src={GooglePlay}
                  alt="Get it on Google Play"
                  className="w-35 cursor-pointer hover:scale-105 transition-transform"
                />

                <Image
                  src={AppStore}
                  alt="Download on the App Store"
                  className="w-35 cursor-pointer hover:scale-105 transition-transform"
                />
              </div>

              {/* Decorative Line */}
              <Line
                width="w-16"
                height="2px"
                color="bg-gray-700"
                className="absolute -bottom-4 left-1/3 -translate-x-1/2"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Hero Illustration */}
        <div className="relative flex justify-end bg-transparent w-full md:mt-48 lg:mt-0">
          <div className="w-full h-75 lg:h-full lg:absolute transition-opacity duration-500">
            <Image
              src={contents[mode].image}
              alt="Payboost Illustration"
              key={mode} // Using key forces a re-animation when mode changes
              priority
              fill
              className={`object-contain scale-125 md:scale-200 ${
                mode === 'crypto' ? 'lg:scale-130' : 'lg:scale-110'
              } w-full animate-in fade-in zoom-in duration-700`}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM OVERLAY IMAGE */}
      {/* <div className="absolute bottom-0 md:-bottom-28 lg:-bottom-32 left-0 w-full z-50 h-auto pointer-events-none">
        <Image
          src={HeroOverlay}
          alt="Hero Overlay"
          className="w-full h-full object-fill"
          priority
        />
      </div> */}
    </section>
  )
}
