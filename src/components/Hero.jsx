import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,92,255,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(126,215,255,0.18),transparent_35%)] pointer-events-none" />

      {/* Floating particles */}
      <Particles count={55} />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-40">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#7ED7FF] animate-pulse" />
            <span>AI Automation & Web Solutions</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white"
          >
            Next‑gen automation for bold, modern brands
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl"
          >
            We design and engineer ultra‑minimal, premium experiences powered by intelligent systems.
            From strategy to shipped product — delivered with Apple‑level smoothness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-xl bg-[#005CFF] text-white font-medium shadow-[0_15px_40px_-15px_rgba(0,92,255,0.9)] hover:brightness-110 transition">
              Start a project
            </a>
            <a href="#work" className="px-6 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-medium backdrop-blur-sm hover:bg-white/15 transition">
              View work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
