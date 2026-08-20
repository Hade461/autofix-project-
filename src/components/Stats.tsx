import { stats } from '../data'

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-steel/40">
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-bold text-torque">{stat.value}</p>
            <p className="text-chrome text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
