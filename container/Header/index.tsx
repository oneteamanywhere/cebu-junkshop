import Link from "next/link";
import type { UrlObject } from 'url';

type Url = string | UrlObject;

interface Menu {
  name: string
  href: Url
}

const menu: Menu[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  }
]

const Header = () => {

  return (
    <header className="w-full h-[60px] px-10 py-4 flex items-center border-b border-gray-200">
      {/* LEFT AREA */}
      <div className="w-1/2">Logo</div>

      {/* RIGHT AREA */}
      <div className="w-1/2 flex gap-6 items-center justify-end">
        <nav className="flex gap-6">
          {menu.map((link) => (
            <Link href={link.href} className="text-sm">{link.name}</Link>
          ))}
        </nav>

        <div>
          <button className="bg-green-800 text-white px-4 py-2 rounded-full cursor-pointer text-sm hover:bg-green-600">Get Started</button>
        </div>
      </div>
    </header>
  )
}

export default Header

// In Tailwind, spacing value is multiplied by 4
// So if spacing value 3 for example, the resulting value in pixels is 12px