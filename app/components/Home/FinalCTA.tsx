import Image from 'next/image'
import HandPhone from '@/public/Images/Free-mockup-hand-holding-iPhone14.png'
import SectionBG from '@/public/Images/FinalCTABG.png'
import { SectionDescription } from '@/app/components/shared/Typography'
import ActionButton from '@/app/components/shared/ActionButton'

export default function FinalCTA() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SectionBG}
          alt="Background Pattern"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-[#051F20] rounded-[40px] border border-white/5 overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 md:p-8 md:p-20 relative min-h-112">
          {/* Left Content */}
          <div className="flex flex-col z-20 max-w-xl text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-poppins text-white mb-5 leading-tight">
              Are you ready to <br className="hidden md:block" /> start the
              Journey?
            </h2>
            <SectionDescription>
              Personalize your settings, follow your progress, archive your
              highlights and notes automatically. Glose is the ultimate reading
              experience.
            </SectionDescription>

            <ActionButton
              text="Get Started"
              borderColor="border-primary"
              bgColor="bg-primary"
              hoverBg="hover:bg-primary/20"
              className="w-fit mx-auto md:mx-0"
            />
          </div>

          {/* Right Content (Hand holding phone) */}
          {/* We use md:absolute to let the image align strictly to the right/bottom of the parent card */}
          <div className="relative md:absolute md:right-0 md:bottom-0 w-full md:w-1/2 h-64 md:h-full z-10">
            <Image
              src={HandPhone}
              alt="App interface in hand"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom md:object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
