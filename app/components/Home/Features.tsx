'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionBG from '@/public/Images/SectionBG.png'
import { SectionHeading, SectionTag } from '@/app/components/shared/Typography'
import ActionButton from '@/app/components/shared/ActionButton'
import { featuresData } from '@/app/data/features'

interface FeaturesProps {
  mode: 'pay' | 'crypto'
  setMode: (mode: 'pay' | 'crypto') => void
}

export default function Features({ mode }: FeaturesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' as const },
    },
  }

  return (
    <section id="features" className="relative overflow-hidden w-full pb-20 md:py-10">
      <div className="absolute inset-0 w-full">
        <Image
          src={SectionBG}
          alt="BG"
          fill
          priority
          className="object-fill w-full scale-125"
        />
      </div>

      <div className="relative z-30 w-full max-w-6xl mx-auto px-6">
        <SectionTag bgColor="bg-[#214F45]" textColor="text-white">
          Featured
        </SectionTag>
        <SectionHeading>
          All the features <br /> in one app
        </SectionHeading>

        {/* AnimatePresence ensures the grid animates when the mode key changes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode} // This triggers the animation on mode change
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-12 mb-12"
          >
            {featuresData[mode].map((feature, idx) => (
              <motion.div
                key={`${mode}-${idx}`} // Unique key per mode/index combo
                variants={itemVariants}
                className="flex flex-col group"
              >
                <div className="flex items-start gap-2">
                  <span className="text-[#E2FF54] text-lg mt-[-2px]">•</span>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-foreground font-poppins group-hover:text-[#E2FF54] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-foreground/60 leading-relaxed font-poppins mt-1">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-full flex"
        >
          <ActionButton text="Get Started" className="w-fit mx-auto md:mx-0" />
        </motion.div>
      </div>
    </section>
  )
}
