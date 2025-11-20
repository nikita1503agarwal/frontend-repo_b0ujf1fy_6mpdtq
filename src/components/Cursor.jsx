import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(0.9)
  const opacity = useMotionValue(0.6)

  const smoothX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.6 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.6 })
  const smoothScale = useSpring(scale, { stiffness: 200, damping: 20 })
  const smoothOpacity = useSpring(opacity, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const down = () => {
      scale.set(0.75)
      opacity.set(0.5)
    }
    const up = () => {
      scale.set(1)
      opacity.set(0.6)
    }

    const addHover = (el) => {
      el.addEventListener('mouseenter', () => {
        scale.set(1.4)
        opacity.set(0.35)
      })
      el.addEventListener('mouseleave', () => {
        scale.set(1)
        opacity.set(0.6)
      })
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    const hoverables = document.querySelectorAll('a, button, [data-cursor]')
    hoverables.forEach(addHover)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [x, y, scale, opacity])

  return (
    <motion.div
      ref={cursorRef}
      style={{
        translateX: smoothX,
        translateY: smoothY,
        scale: smoothScale,
        opacity: smoothOpacity,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#7ED7FF]/20 ring-1 ring-[#7ED7FF]/40 blur-[0.2px]" />
    </motion.div>
  )
}
