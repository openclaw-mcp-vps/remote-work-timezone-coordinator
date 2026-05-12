export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Remote Team Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the perfect meeting time{" "}
          <span className="text-[#58a6ff]">across every timezone</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing. Add your team members, set their work hours, and get
          AI-scored meeting slots that keep everyone in their working day.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started — $10/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["🌍", "Auto timezone detection"],
            ["⚖️", "Fairness scoring"],
            ["📅", "Calendar-ready export"],
          ].map(([icon, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$10</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited teams & members",
              "Smart meeting time optimizer",
              "Fairness score per suggestion",
              "iCal / Google Calendar export",
              "Priority email support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the optimizer work?",
              "We score every 30-minute slot across the day by counting how many team members fall within their declared work hours, then rank slots by fairness — no one person always takes the late call.",
            ],
            [
              "Do I need to install anything?",
              "No. It's fully browser-based. Add your team, set preferences, and copy the suggested times straight into your calendar invite.",
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your billing portal at any time. You keep access until the end of the billing period.",
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              className="bg-[#161b22] border border-[#30363d] rounded-xl px-5 py-4 group"
            >
              <summary className="cursor-pointer font-medium text-white list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Timezone Coordinator. All rights reserved.
      </footer>
    </main>
  )
}
