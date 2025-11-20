import { Sparkles, Cpu, Rocket, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Systems & Agents',
    desc: 'Custom GPTs, autonomous agents, and workflow orchestration tuned to your stack.',
  },
  {
    icon: Cpu,
    title: 'Automation Pipelines',
    desc: 'From lead gen to ops. Robust, event-driven flows that scale with you.',
  },
  {
    icon: Rocket,
    title: 'Premium Web Experiences',
    desc: 'Ultra-minimal interfaces, glass layers, 3D accents, and buttery motion.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Reliability',
    desc: 'Best practices by default: auth, observability, and fail-safes built-in.',
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,92,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Solutions built for momentum</h2>
          <p className="mt-4 text-white/70 max-w-xl">Strategic design and engineering — everything you need to move fast, stay polished, and ship with confidence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7ED7FF] flex items-center justify-center text-white shadow-[0_10px_30px_-10px_rgba(0,92,255,0.8)]">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
