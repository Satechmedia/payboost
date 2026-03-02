'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionBG from '@/public/Images/SectionBG.png'
import ServicePhones from '@/public/Images/ServicePhones.png'
import CardsMockup from '@/public/Images/CardsMockup.png'
import InsightsMockup from '@/public/Images/InsightsMockup.png'
import { SectionHeading, SectionTag } from '@/app/components/shared/Typography'
import ExpenseDetails from '@/public/Images/ExpenseDetails.png'
import ActionButton from '@/app/components/shared/ActionButton'

// --- Icons ---
import { FiGlobe } from 'react-icons/fi'
import { LuTrendingUp } from 'react-icons/lu'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'
import { FaDollarSign } from 'react-icons/fa'


import HeroOverlay from '@/public/Images/HeroOverlay.png'


export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    }),
  }

  return (
    <section className="relative overflow-hidden w-full md:pt-6 pb-6">
      {/* BACKGROUND IMAGE LAYER */}
      {/* <div className="absolute z-10 inset-0 w-full">
        <Image
          src={SectionBG}
          alt="Background Pattern"
          fill
          priority
          className="object-fill w-full scale-125"
          quality={100}
        />
      </div> */}

      <div className="absolute -top-20 left-0 w-full z-20 h-72 md:h-auto pointer-events-none">
        <Image
          src={HeroOverlay}
          alt="Hero Overlay"
          className="w-full h-full object-fill"
          priority
        />
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col items-center text-center mb-12"
        >
          <SectionTag bgColor="bg-white" textColor="text-black">
            Services
          </SectionTag>
          <SectionHeading>
            Can help you achieve <br /> financial success
          </SectionHeading>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Top Row: Global Transfers */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="md:col-span-6 bg-white rounded-3xl py-4 px-4 md:py-0 md:px-8 h-auto md:h-75 overflow-hidden group"
          >
            <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between h-full">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-full max-w-sm h-full order-2 md:order-1 flex items-end"
              >
                <Image
                  src={ServicePhones}
                  alt="Global"
                  // className="w-full object-contain h-[90%]"
                  className="w-full max-w-sm object-contain h-full"
                />
              </motion.div>
              <div className="max-w-xs order-1 md:order-2 py-8">
                <div className="bg-[#16B51E] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <FiGlobe className="text-white text-xl" />
                </div>
                <h3 className="text-black text-xl md:text-2xl font-bold font-syne">
                  Transfers Across The Globe Are Free
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Middle Left: Virtual Cards */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="md:col-span-3 bg-[#F6F9F8] rounded-3xl h-112.5 flex flex-col relative overflow-hidden group"
          >
            <div className="py-4 md:py-8 p-4 md:p-8 shrink-0 relative z-10">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <LuTrendingUp className="text-white text-xl" />
              </div>
              <h3 className="text-black text-xl md:text-2xl font-bold font-syne uppercase mb-2 leading-tight">
                Create A Card That Is <br className="hidden lg:block" /> Unique
                And Customized
              </h3>
              <p className="text-black/60 text-xs font-poppins max-w-[90%]">
                We offer a comprehensive range of innovative financial services
                tailored to meet your needs.
              </p>
            </div>
            <div className="mt-auto relative w-full h-64 overflow-hidden">
              <Image
                src={CardsMockup}
                alt="Cards"
                fill
                className="w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Middle Right: Insights */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="md:col-span-3 bg-[#051F20] rounded-3xl h-112.5 flex flex-col relative overflow-hidden border border-white/5 group"
          >
            <div className="pt-8 px-4 md:px-8 shrink-0 relative z-10">
              <div className="bg-[#16B51E] w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <HiOutlineCog6Tooth className="text-white text-xl" />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold font-syne uppercase mb-2 leading-tight">
                Personalized Insights <br className="hidden lg:block" /> And
                Financial Goals
              </h3>
              <p className="text-white/60 text-xs font-poppins max-w-[90%] capitalize">
                Invest wisely with our personalized savings accounts that offer
                competitive interest rates.
              </p>
            </div>
            <div className="mt-auto relative w-full h-64 overflow-hidden flex justify-end">
              <Image
                src={InsightsMockup}
                alt="Insights"
                fill
                className="object-contain object-left transition-transform duration-700 group-hover:translate-x-4"
              />
            </div>
          </motion.div>

          {/* Bottom Row: 3 Small Cards */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-[#E2FF54] rounded-3xl p-4 md:p-6 min-h-50 flex flex-col justify-center"
          >
            <h3 className="text-black text-xl md:text-2xl font-semibold font-montserrat leading-tight">
              100% Dedication
            </h3>
            <p className="text-black/60 text-xs mt-2 font-poppins">
              Innovative financial services tailored to meet your needs.
            </p>
          </motion.div>

          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="md:col-span-2 bg-white rounded-3xl p-4 md:p-6 min-h-50 flex items-center justify-between overflow-hidden group"
          >
            <div className="flex flex-col gap-3 max-w-[55%]">
              <div className="bg-[#16B51E] w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm">
                <FaDollarSign className="text-sm" />
              </div>
              <h3 className="text-black text-xl md:text-2xl font-semibold font-montserrat leading-tight">
                Hold Money In 30+ Currencies
              </h3>
            </div>
            <div className="relative w-[40%] h-full flex items-center">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Image
                  src={ExpenseDetails}
                  alt="Expense Details"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={6}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 bg-[#2D907A] rounded-3xl p-4 md:p-6 min-h-50 flex items-center justify-center text-center cursor-pointer transition-colors hover:bg-[#257a67]"
          >
            <h3 className="text-white text-xl md:text-2xl font-semibold font-montserrat">
              Visit Our Services Page
            </h3>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-10"
        >
          <ActionButton text="View More" />
        </motion.div> */}
      </div>
    </section>
  )
}
