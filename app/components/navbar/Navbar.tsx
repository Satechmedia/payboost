'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import DesktopDropdown from '@/app/components/navbar/DesktopDropdown'
import { navLinks } from '@/app/data/navLinks'
import Logo from '@/public/Images/Logo.png'
import WaitlistModal from '@/app/components/shared/WaitlistModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // <nav className="sticky top-0 z-50 w-full border-b border-white/10">
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-background/95 backdrop-blur-md border-b border-foreground/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 ">
          <div className="flex justify-between items-center py-3 shadow-lg md:shadow-0">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="PayBoost Logo"
                className="object-contain h-8 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown key={link.label} link={link} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="text-sm font-medium text-foreground hover:bg-primary px-2 py-1.5 rounded-md"
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary px-4 py-1.5 rounded-md  text-sm font-medium text-foreground/70 hover:opacity-70 hover:cursor-pointer"
              >
                Download App
              </button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-6 pt-6 pb-12 space-y-4 bg-background">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setMobileDropdown((prev) =>
                        prev === link.label ? null : link.label,
                      )
                    }
                    className="flex w-full justify-between py-1.5 font-medium"
                  >
                    {link.label}
                    <ChevronDown size={18} />
                  </button>

                  {mobileDropdown === link.label && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-sm opacity-80"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-foreground/70 hover:bg-primary py-1.5 rounded-md"
                >
                  {link.label}
                </Link>
              ),
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary px-4 py-1.5 rounded-md  text-sm font-medium text-foreground/70 hover:opacity-70"
            >
              Download App
            </button>
          </div>
        )}
      </nav>
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
