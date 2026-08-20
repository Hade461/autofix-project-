import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-5 py-20">
      <div className="mb-10">
        <p className="font-mono text-torque text-sm tracking-widest mb-2">الخدمات</p>
        <h2 className="font-display text-3xl font-bold text-bone">شو بنسوي بالورشة</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-steel rounded-lg p-6 border border-white/10 border-dashed hover:border-torque transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-chrome">بطاقة عمل</span>
              <span className="font-mono text-torque font-bold text-lg">#{service.ticketNumber}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-bone mb-2">{service.title}</h3>
            <p className="text-chrome text-sm leading-relaxed mb-4">{service.description}</p>
            <p className="font-mono text-gauge text-sm">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
