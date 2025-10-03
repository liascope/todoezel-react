'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Icons
import TodoIcon from './NavIcons/TodoIcon'
import ShopIcon from './NavIcons/ShopIcon'
import LaterIcon from './NavIcons/LaterIcon'

const links = [
  { href: '/', Icon: TodoIcon, alt: 'To Do' },
  { href: '/shop', Icon: ShopIcon, alt: 'Shop' },
  { href: '/do-later', Icon: LaterIcon, alt: 'Do Later' }
]

export default function Navigation() {
  const pathname = usePathname()

  const baseStyle =
    'transition-all duration-300 py-1 ease-in-out px-10 cursor-pointer w-1/3 text-center uppercase bg-emerald-400'
  const activeStyle = 'bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400'

  return (
    <footer className="flex flex-col fixed bottom-0 left-0 w-full text-center">
      <nav className="flex justify-evenly z-10  bg-emerald-400 transition-colors duration-300 ease-in-out">
        {links.map(({ href, Icon, alt }) => (
          <Link
            key={href}
            href={href}
            className={`${baseStyle} ${pathname === href ? activeStyle : ''}`}
          >
            <Icon className="mx-auto w-7 h-7 sm:w-12 sm:h-12" aria-label={alt} />
          </Link>
        ))}
      </nav>
        <p className="my-1 text-xs tracking-wider text-stone-800/60 text-shadow-lg cursor-pointer font-extrabold hover:bg-stone-900">
          ToDoeZel App | © 2025 Liascope. All rights reserved.
        </p>
    </footer>
  )
}
