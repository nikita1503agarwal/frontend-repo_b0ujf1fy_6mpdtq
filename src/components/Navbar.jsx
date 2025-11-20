import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#005CFF] to-[#7ED7FF] shadow-[0_0_30px_rgba(0,92,255,0.5)]" />
              <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition-colors">AUTOMINDS</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="px-4 py-2 rounded-xl bg-[#005CFF] text-white text-sm font-medium shadow-[0_10px_30px_-10px_rgba(0,92,255,0.8)] hover:brightness-110 transition">Start a Project</a>
            </nav>

            <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 px-4 py-2 rounded-xl bg-[#005CFF] text-white text-sm font-medium text-center" onClick={() => setOpen(false)}>
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
