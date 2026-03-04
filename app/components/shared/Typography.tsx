import { ReactNode } from 'react'

// 1. Tag Component (The "About Us" / "Featured" badge)
interface TagProps {
  children: ReactNode
  icon?: string
  bgColor?: string
  textColor?: string
}

export const SectionTag = ({
  children,
  icon = '',
  bgColor = 'bg-amber-100',
  textColor = 'text-black',
}: TagProps) => (
  <div
    className={`flex items-center gap-2 ${bgColor} border border-white/10 w-fit mx-auto md:mx-0 px-3 py-1 rounded-full mb-6`}
  >
    {/*  <span className="text-[#E2FF54] text-xs">{icon}</span> */} 
    <span
      className={`text-[10px] font-bold uppercase tracking-wider ${textColor}`}
    >
      {children}
    </span>
  </div>
)

// 2. Heading Component
interface HeadingProps {
  children: ReactNode
  className?: string
}

export const SectionHeading = ({ children, className = '' }: HeadingProps) => (
  <h2
    className={`text-2xl md:text-3xl lg:text-5xl   font-bold text-foreground tracking-[-5%] font-syne text-center md:text-left uppercase transition-all duration-500 ${className}`}
  >
    {children}
  </h2>
)

// 3. Paragraph Component
export const SectionDescription = ({ children }: { children: ReactNode }) => (
  <p className="text-foreground/60 text-sm mb-10 max-w-md font-poppins text-center md:text-left leading-relaxed">
    {children}
  </p>
)
