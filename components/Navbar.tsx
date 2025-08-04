'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/mint', label: 'Mint Resume' },
  { href: '/resume', label: 'My Resumes' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">NFT Resume</h1>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:underline ${
                pathname === link.href ? 'text-yellow-300' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
