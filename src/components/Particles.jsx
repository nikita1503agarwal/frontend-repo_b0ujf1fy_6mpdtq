import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Particles({ count = 40 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 6,
      opacity: Math.random() * 0.5 + 0.15,
    })), [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <motion.span
          key={p.id}
          initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0 }}
          animate={{
            x: [`${p.x}%`, `${(p.x + 2) % 100}%`, `${(p.x - 1 + 100) % 100}%`],
            y: [`${p.y}%`, `${(p.y - 4 + 100) % 100}%`, `${(p.y + 2) % 100}%`],
            opacity: [0, p.opacity, 0],
          }}
          transition={{ duration: p.duration, ease: 'easeInOut', repeat: Infinity, delay: p.delay }}
          className="absolute block rounded-full bg-cyan-300/10 shadow-[0_0_20px_rgba(126,215,255,0.15)]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  )
}
