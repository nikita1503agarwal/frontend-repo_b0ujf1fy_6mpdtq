export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_100%,rgba(0,92,255,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(126,215,255,0.06),transparent,rgba(0,92,255,0.06),transparent)]" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">Build something remarkable</h3>
              <p className="mt-3 text-white/70 max-w-md">Tell us your goals. We’ll architect the AI, automation, and web experience to get you there faster.</p>
            </div>
            <form className="grid gap-3">
              <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#005CFF]/40" />
              <input placeholder="Work email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#005CFF]/40" />
              <textarea placeholder="What would you like to build?" rows={4} className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#005CFF]/40" />
              <button className="mt-2 px-6 py-3 rounded-xl bg-[#005CFF] text-white font-medium shadow-[0_15px_40px_-15px_rgba(0,92,255,0.9)] hover:brightness-110 transition text-left">
                Request proposal →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
