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
    'transition-all duration-300 ease-in-out py-2 px-10 cursor-pointer w-1/3 text-center uppercase bg-green-400'
  const activeStyle = 'bg-gradient-to-r from-green-400 via-blue-400 to-green-400'

  return (
    <footer className="flex flex-col fixed bottom-0 left-0 w-full text-center">
      <nav className="flex justify-evenly shadow-[-0_2px_5px_rgba(0,0,0,0.1)] z-10 bg-green-400 transition-colors duration-300 ease-in-out">
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
      <div className="backdrop-blur-2xl bg-stone-900/60">
        <p className="my-1 text-xs tracking-wide text-transparent bg-stone-300/80 bg-clip-text shadow-2xl">
          ToDoeZel App | © 2025 ZAkin. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
