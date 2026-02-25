'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Line from '@/app/components/shared/Line'
import AppStore from '@/public/Images/AppStore.png'
import GooglePlay from '@/public/Images/GooglePlay.png'
import HeroBG from '@/public/Images/Hero BG.png'
import HeroOverlayImage1 from '@/public/Images/Card.png'
import HeroOverlayImage2 from '@/public/Images/User.png'
import { contents } from '@/app/data/contents'

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
          <div className="flex flex-col w-full">
            {/* TOGGLE BUTTONS */}
            <div className="flex gap-2 mb-3 bg-[#0F3147] p-1 rounded-full justify-center w-fit mx-auto lg:mx-0 border border-foreground/10">
              {['pay', 'crypto'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m as 'pay' | 'crypto')}
                  className={`relative px-6 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer z-10 ${
                    mode === m
                      ? 'text-foreground'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {mode === m && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg"
                      transition={{
                        type: 'spring',
                        duration: 0.5,
                        bounce: 0.2,
                      }}
                    />
                  )}
                  <span className="capitalize">{m}</span>
                </button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2 bg-[#2E4A5D] p-2 rounded-full justify-center w-fit mx-auto lg:mx-0 mb-4"
            >
              <span className="text-[10px] md:text-xs font-medium">
                🔥 100% TRUSTED PLATFORM
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-[-5%] font-syne text-center lg:text-left uppercase">
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
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 relative flex flex-col w-full max-w-md mx-auto lg:mx-0 items-center lg:items-start">
              <div className="flex flex-row items-center gap-4 mt-0">
                <Image
                  src={GooglePlay}
                  alt="Google Play"
                  className="w-35 cursor-pointer hover:scale-105 transition-transform"
                />
                <Image
                  src={AppStore}
                  alt="App Store"
                  className="w-35 cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
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
        <div className="relative flex justify-end bg-transparent w-full md:mt-48 lg:mt-0 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-75 lg:h-full lg:absolute"
            >
              <Image
                src={contents[mode].image}
                alt="Payboost Illustration"
                priority
                fill
                className={`object-contain scale-125 md:scale-200 ${
                  mode === 'crypto' ? 'lg:scale-130' : 'lg:scale-110'
                } w-full`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}