import Image from 'next/image'
import SectionBG from '@/public/Images/SectionBG.png'
import {
  // SectionDescription,
  SectionHeading,
  SectionTag,
} from '@/app/components/shared/Typography'
import ActionButton from '@/app/components/shared/ActionButton'

export default function Features() {
  const features = [
    {
      title: 'Pay',
      desc: 'Send, Receive, And Manage Your Money Instantly. Fast Transfers, Bill Payments, And Smart Tools',
    },
    {
      title: 'Refer',
      desc: 'Invite Friends. Earn Rewards. Share Your Referral Code And Get Benefits When Your Friends Join And Start Using The App.',
    },
    {
      title: 'Finance',
      desc: 'Understand Your Money Better. Track Spending, Set Goals, And Get Simple Insights To Help You Save And Grow.',
    },
    {
      title: 'Finance',
      desc: 'Grow Your Savings, Set Goals, And Access Quick Loans — All In One Simple Place.',
    },
    {
      title: 'Utility',
      desc: 'Top Up Airtime, Pay Utilities, And Handle Subscriptions',
    },
    {
      title: 'Virtual Card',
      desc: 'Create Virtual Cards For Subscriptions And Online Payments, Control Limits, And Freeze Anytime.',
    },
  ]

  return (
    <section className="relative overflow-hidden w-full py-20">
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

      <div className="relative z-30 w-full max-w-6xl mx-auto px-6">
        <SectionTag bgColor="bg-[#214F45]" textColor="text-white">
          Featured
        </SectionTag>

        <SectionHeading>
          All the features <br /> in one app
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-12 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-start gap-2">
                <span className="text-[#E2FF54] text-lg mt-[-2px]">•</span>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-foreground font-poppins">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed font-poppins mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ActionButton text="Get Started" />
      </div>
    </section>
  )
}
