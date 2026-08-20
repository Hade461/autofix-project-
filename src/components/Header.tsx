const navLinks = [
  { href: '#services', label: 'الخدمات' },
  { href: '#gallery', label: 'شغلنا' },
  { href: '#testimonials', label: 'آراء الزباين' },
  { href: '#contact', label: 'تواصل معنا' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-asphalt/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold text-bone">
          ورشة <span className="text-torque">الصقر</span>
        </a>
        <nav className="hidden md:flex gap-8 font-medium text-chrome text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-torque transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/963946150461"
          target="_blank"
          rel="noreferrer"
          className="rounded bg-torque text-asphalt font-bold text-sm px-4 py-2 hover:brightness-110 transition"
        >
          احجز موعد
        </a>
      </div>
    </header>
  )
}
