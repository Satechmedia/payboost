import Logo from '@/public/Images/Logo.png'
import AppStore from '@/public/Images/AppStore.png'
import GooglePlay from '@/public/Images/GooglePlay.png'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
import { navLinks } from '@/app/data/navLinks'

const Footer = () => {
  return (
    <footer className="w-full text-white py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* App Store Buttons */}
        <div className="flex flex-row items-center gap-4 mb-10">
          <Link href="#">
            <Image
              src={AppStore}
              alt="Download on App Store"
              className="w-32 md:w-40 h-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>
          <Link href="#">
            <Image
              src={GooglePlay}
              alt="Get it on Google Play"
              className="w-32 md:w-40 h-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Logo and Main Nav */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src={Logo}
              alt="Payboost Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-medium opacity-90">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href || '#'}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Icons - Circular Green background as per image */}
        <div className="flex gap-4 mb-12">
          {[
            { icon: <FaTwitter />, href: '#' },
            { icon: <FaFacebookF />, href: '#' },
            { icon: <FaInstagram />, href: '#' },
            { icon: <FaLinkedinIn />, href: '#' },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#064E3B] hover:bg-[#16b51e] text-white transition-all duration-300 text-lg"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Policies */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs md:text-sm opacity-80 mb-8">
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Privacy Policy
          </Link>
          <span className="opacity-40">|</span>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Terms & Condition
          </Link>
          <span className="opacity-40">|</span>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Copyright Policy
          </Link>
          <span className="opacity-40">|</span>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Data Policy
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm opacity-60 font-light">
          © 2026 Payboost. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer