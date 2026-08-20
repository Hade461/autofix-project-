import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-steel/40 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <div className="mb-10">
          <p className="font-mono text-torque text-sm tracking-widest mb-2">آراء الزباين</p>
          <h2 className="font-display text-3xl font-bold text-bone">شو حكوا عنا</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-asphalt rounded-lg p-6 border border-white/10">
              <p className="text-bone leading-relaxed mb-4">"{t.quote}"</p>
              <p className="font-mono text-torque text-sm">{t.name}</p>
              <p className="text-chrome text-xs">{t.car}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
