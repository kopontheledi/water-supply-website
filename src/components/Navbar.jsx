
import { useState } from 'react'
import { Menu, X, Droplets } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-3">
          <div className="bg-navy text-white p-2.5 rounded-lg">
            <Droplets size={27} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-navy leading-tight">
              WATER SUPPLY
            </h1>
            <p className="text-[10px] tracking-[3px] text-water font-semibold">
              WATER DELIVERY SERVICES
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-water transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-water hover:bg-navy text-white px-6 py-3 rounded-md text-sm font-bold transition"
          >
            Request a Quote
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-navy"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-water text-white text-center py-3 rounded-md font-bold"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  )
}
