// /app/data/navLinks.ts

import { NavLink } from '@/app/types/navigation'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },

  
  { label: 'About Us', href: '#about-us' },
  {
    label: 'Features',
    children: [
      { label: 'Crypto', href: '#features-crypto' },
      { label: 'Pay In', href: '#features-pay-in' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]
