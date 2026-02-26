'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionBG from '@/public/Images/SectionBG.png'
import Shield from '@/public/Images/Trust-Checked.png'
import {
  SectionDescription,
  SectionHeading,
  SectionTag,
} from '@/app/components/shared/Typography'
import ActionButton from '@/app/components/shared/ActionButton'

export default function Security() {
  return (
    <section className="w-full relative overflow-hidden md:pt-6 pb-24">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full">
        <Image
          src={SectionBG}
          alt="Background Pattern"
          fill
          priority
          className="object-fill w-full"
          quality={100}
        />
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-0">
        {/* Left: Shield Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: 'easeOut' as const,
          }}
          className="flex justify-center order-2 md:order-1"
        >
          {/* Active "Pulse" or Breathing effect for the Shield */}
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              filter: [
                'drop-shadow(0 0 0px rgba(226, 255, 84, 0))',
                'drop-shadow(0 0 15px rgba(226, 255, 84, 0.2))',
                'drop-shadow(0 0 0px rgba(226, 255, 84, 0))',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={Shield}
              alt="Security Shield"
              className="w-full max-w-80 object-contain scale-75 md:scale-100"
            />
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col order-1 md:order-2"
        >
          <SectionTag bgColor="bg-[#003B47]" textColor="text-white">
            Trustworthiness
          </SectionTag>

          <SectionHeading>
            We value your trust <br /> and security
          </SectionHeading>

          <div className="mt-4">
            <SectionDescription>
              Our Mission Is To Make Finance More Accessible, Transparent, And
              Secure For Everyone. With Cutting-Edge Technology, We Ensure Your
              Assets Are Always Protected.
            </SectionDescription>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='w-full flex'
          >
            <ActionButton
              text="Get Started"
              borderColor="border-primary"
              bgColor="bg-primary"
              hoverBg="hover:bg-primary/20"
              className="w-fit mx-auto md:mx-0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}