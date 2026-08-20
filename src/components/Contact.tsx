const contactLinks = [
  { label: 'واتساب', value: '+963 946 150 461', href: 'https://wa.me/963946150461' },
  { label: 'انستغرام', value: 'hadeeteasna', href: 'https://instagram.com/hadeteasna' },
  { label: 'الموقع', value: 'دمشق - المزة، بجانب محطة الوقود', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-20">
      <div className="mb-10">
        <p className="font-mono text-torque text-sm tracking-widest mb-2">تواصل معنا</p>
        <h2 className="font-display text-3xl font-bold text-bone">جهز سيارتك، تواصل هلق</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {contactLinks.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="bg-steel rounded-lg p-6 border border-white/10 hover:border-torque transition-colors"
          >
            <p className="font-mono text-torque text-xs tracking-widest mb-2">{c.label}</p>
            <p className="text-bone">{c.value}</p>
          </a>
        ))}
      </div>
      <div className="mt-8 bg-steel/60 rounded-lg p-6 border border-white/10 flex flex-wrap gap-6 text-sm">
        <div>
          <p className="text-chrome">أيام العمل</p>
          <p className="text-bone font-medium">السبت - الخميس</p>
        </div>
        <div>
          <p className="text-chrome">ساعات الدوام</p>
          <p className="text-bone font-medium">9 صباحاً - 7 مساءً</p>
        </div>
      </div>
    </section>
  )
}
