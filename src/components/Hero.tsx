import Gauge from './Gauge'

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="font-mono text-torque text-sm tracking-widest mb-4">ورشة تصليح ميكانيك · دمشق</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-bone leading-tight">
          نشتغل تحت السيارة،
          <br />
          مو بس فوق الفاتورة
        </h1>
        <p className="text-chrome mt-5 max-w-md leading-relaxed">
          فريق فنيين بخبرة أكتر من 14 سنة، بيشرحولك كل عطل قبل ما يصلحوه، وبيسعّروا بصراحة
          من أول معاينة.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="https://wa.me/963946150461"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-torque text-asphalt font-bold px-6 py-3 hover:brightness-110 transition"
          >
            احجز موعد على واتساب
          </a>
          <a
            href="#services"
            className="rounded border border-white/20 text-bone px-6 py-3 hover:border-torque hover:text-torque transition"
          >
            شوف الخدمات
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <Gauge needleAngle={-45} statusLabel="الورشة مفتوحة الآن" />
      </div>
    </section>
  )
}
