import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen bg-[#020B20] text-white relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(0,92,255,0.15),transparent),radial-gradient(70%_50%_at_100%_0%,rgba(126,215,255,0.12),transparent)]" />

      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} AUTOMINDS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
