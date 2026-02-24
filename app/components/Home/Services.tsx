import Image from 'next/image'
import SectionBG from '@/public/Images/SectionBG.png'
import ServicePhones from '@/public/Images/ServicePhones.png' // Big top card
import CardsMockup from '@/public/Images/CardsMockup.png' // Left middle card
import InsightsMockup from '@/public/Images/InsightsMockup.png' // Right middle card
import { SectionHeading, SectionTag } from '@/app/components/shared/Typography'
import ExpenseDetails from '@/public/Images/ExpenseDetails.png'
import ActionButton from '@/app/components/shared/ActionButton'

export default function Services() {
  return (
    <section className="relative overflow-hidden w-full md:pt-6 pb-24">
      <div className="absolute inset-0 z-10">
        <Image src={SectionBG} alt="bg" fill className="object-fill" />
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionTag bgColor="bg-white" textColor="text-black">
            Services
          </SectionTag>
          <SectionHeading>
            Can help you achieve <br /> financial success
          </SectionHeading>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Top Row: Global Transfers */}
          <div className="md:col-span-6 bg-white rounded-3xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden h-[300px]">
            <Image
              src={ServicePhones}
              alt="Global"
              className="w-full max-w-sm object-contain"
            />
            <div className="max-w-xs">
              <div className="bg-[#16B51E] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                🌐
              </div>
              <h3 className="text-black text-xl md:text-2xl font-bold font-syne uppercase">
                Transfers Across The Globe Are Free
              </h3>
            </div>
          </div>

          {/* Middle Left: Virtual Cards */}
          <div className="md:col-span-3 bg-white rounded-3xl h-[450px] flex flex-col relative overflow-hidden group">
            {/* TOP CONTENT */}
            <div className="py-4 md:py-8 p-4 md:p-8 flex-shrink-0">
              <div className="bg-[#16B51E] w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                📈
              </div>
              <h3 className="text-black text-xl md:text-2xl font-bold font-syne uppercase mb-2 leading-tight">
                Create A Card That Is <br className="hidden lg:block" /> Unique
                And Customized
              </h3>
              <p className="text-black/60 text-xs font-poppins max-w-[90%]">
                We offer a comprehensive range of innovative financial services
                tailored to meet your needs. Our services include High-Yield
                Savings Accounts.
              </p>
            </div>

            {/* IMAGE CONTAINER */}
            {/* mt-auto pushes this to the bottom. h-full allows it to take up all remaining space */}
            <div className="mt-auto relative w-full h-full overflow-hidden">
              <Image
                src={CardsMockup}
                alt="Cards"
                fill
                className="w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-3 bg-[#051F20] rounded-3xl h-112.5 flex flex-col relative overflow-hidden border border-white/5 group">
            {/* TOP CONTENT */}
            <div className="pt-8 px-4 md:px-8 shrink-0">
              <div className="bg-[#16B51E] w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                ⚙️
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold font-syne uppercase mb-2 leading-tight">
                Personalized Insights <br className="hidden lg:block" /> And
                Financial Goals
              </h3>
              <p className="text-white/60 text-xs font-poppins max-w-[90%] capitalize">
                savings accounts that offer competitive interest rates and
                flexible deposit options. Investment Invest wisely with our
                personalized.Our services include High-Yield Savings
              </p>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="mt-auto relative w-full h-full overflow-hidden flex justify-end">
              <Image
                src={InsightsMockup}
                alt="Insights"
                fill
                className="object-contain object-left transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Bottom Row: 3 Small Cards */}
          <div className="md:col-span-2 bg-[#E2FF54] rounded-3xl p-4 md:p-6 min-h-50 flex flex-col justify-center">
            <h3 className="text-black text-xl md:text-2xl font-semibold font-montserrat leading-tight">
              100% Dedication
            </h3>
            <p className="text-black/60 text-xs mt-2 font-poppins">
              We offer a comprehensive range of innovative financial services
              tailored to meet your needs.
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-4 md:p-6 min-h-50 flex items-center justify-between overflow-hidden group">
            {/* Left Side: Text Content */}
            <div className="flex flex-col gap-3 max-w-[55%]">
              <div className="bg-[#16B51E] w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow-sm">
                $
              </div>
              <h3 className="text-black text-xl md:text-2xl font-semibold font-montserrat leading-tight">
                Hold Money In 30+ Currencies
              </h3>
            </div>

            {/* Right Side: Image Content */}
            <div className="relative w-[40%] h-full flex items-center">
              <Image
                src={ExpenseDetails}
                alt="Expense Details"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:translate-x-1"
              />
            </div>
          </div>

          <div className="md:col-span-2 bg-[#2D907A] rounded-3xl p-4 md:p-6 min-h-50 flex items-center justify-center text-center cursor-pointer hover:bg-[#3a5d75] transition-colors">
            <h3 className="text-white text-xl md:text-2xl font-semibold font-montserrat">
              Visit Our Services Page
            </h3>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <ActionButton text="View More" />
        </div>
      </div>
    </section>
  )
}
