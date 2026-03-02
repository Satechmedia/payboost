'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Phones from '@/public/Images/Phones.png'
import SectionBG from '@/public/Images/SectionBG.png'
import {
  SectionDescription,
  SectionHeading,
  SectionTag,
} from '@/app/components/shared/Typography'

interface AboutProps {
  mode: 'pay' | 'crypto'
  setMode: (mode: 'pay' | 'crypto') => void
}

export default function AboutUs({ mode, setMode }: AboutProps) {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden w-full grid md:grid-cols-2 gap-12 items-center py-16"
    >
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute z-10 inset-0 w-full">
        <Image
          src={SectionBG}
          alt="Background Pattern"
          fill
          priority
          className="object-fill w-full scale-125"
          quality={100}
        />
      </div>

      {/* Left: Phone Images */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="z-30 order-2 md:order-1"
      >
        {/* Subtle Floating Animation */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex justify-center items-center "
        >
          <Image
            src={Phones}
            alt="App Mockup"
            className="w-full max-w-87.5 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Right: Content */}
      <div className="flex flex-col z-30 px-6 w-full order-1 md:order-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTag bgColor="bg-white" textColor="text-black">
            About Us
          </SectionTag>

          <SectionHeading>
            All your money <br /> needs in one app
          </SectionHeading>

          <SectionDescription>
            From daily payments to digital assets, manage everything seamlessly
            in one place.
          </SectionDescription>
        </motion.div>

        <div className="relative space-y-4 font-poppins mt-6">
          {/* Pay Card */}
          <div
            onClick={() => setMode('pay')}
            className="relative z-10 pl-4 cursor-pointer group"
          >
            {/* Conditional Green Indicator - Animated Slide */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[6px] rounded-full bg-white/20">
              {mode === 'pay' && (
                <motion.div
                  layoutId="aboutIndicator"
                  className="w-full h-full bg-[#27AE60] shadow-[0_0_10px_#27AE60]"
                />
              )}
            </div>

            <motion.div
              animate={{
                backgroundColor: mode === 'pay' ? '#051F20' : 'transparent',
                borderColor: mode === 'pay' ? '#051F20' : '#ffffff',
              }}
              className="rounded-2xl w-full max-w-md p-6 border transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-2">Pay (Fintech)</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Send, receive, and manage your money in seconds.
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed mt-5">
                Pay covers your everyday finances, fast transfers, bill
                payments, and smart spending tools.
              </p>
            </motion.div>
          </div>

          {/* Crypto Card */}
          <div
            onClick={() => setMode('crypto')}
            className="relative z-10 pl-4 cursor-pointer group"
          >
            {/* Conditional Green Indicator - Animated Slide */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[6px] rounded-full bg-white/20">
              {mode === 'crypto' && (
                <motion.div
                  layoutId="aboutIndicator"
                  className="w-full h-full bg-[#27AE60] shadow-[0_0_10px_#27AE60]"
                />
              )}
            </div>

            <motion.div
              animate={{
                backgroundColor: mode === 'crypto' ? '#051F20' : 'transparent',
                borderColor: mode === 'crypto' ? '#051F20' : '#ffffff',
              }}
              className="rounded-2xl w-full max-w-md p-6 border transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-2">Crypto</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Buy, hold, and explore digital assets with ease.
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed mt-5">
                Crypto lets you step into Web3 simply and safely, trade coins,
                and track your portfolio.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}