interface CustomButtonProps {
  text: string
  borderColor?: string // Optional: defaults to your specific yellow/30
  bgColor?: string // Optional: defaults to transparent
  hoverBg?: string // Optional: defaults to white/5
  onClick?: () => void
  className?: string
}

export default function ActionButton({
  text,
  borderColor = 'border-primary/60',
  bgColor = 'bg-transparent',
  hoverBg = 'hover:bg-white/5',
  onClick,
  className = '',
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${borderColor} 
        ${bgColor} 
        ${hoverBg}
        border rounded-full px-10 py-3 text-xs font-bold font-poppins text-white 
        transition-all duration-300 active:scale-95 cursor-pointer
        ${className}
      `}
    >
      {text}
    </button>
  )
}
