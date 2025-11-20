export default function Showcase() {
  const items = [
    {
      tag: 'Automation',
      title: 'Inbound lead triage → CRM enrichment → Slack alerts',
    },
    {
      tag: 'AI Agent',
      title: 'Autonomous support bot integrated with knowledge base',
    },
    {
      tag: 'Web',
      title: 'High-conversion landing with 3D hero and glass UI',
    },
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_100%_0%,rgba(126,215,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Recent work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A glimpse into the systems and experiences we build. Crisp, performant, and measurable.</p>
          </div>
          <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white/90 hover:text-white hover:bg-white/15 transition backdrop-blur-sm">Get a demo</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#005CFF]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs text-white/70 bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7ED7FF]" /> {it.tag}
                </div>
                <h3 className="mt-4 text-white font-medium">{it.title}</h3>
                <div className="mt-5 h-32 rounded-xl bg-gradient-to-br from-[#020B20] to-[#051637] border border-white/10 shadow-inner" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
