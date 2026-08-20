export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-chrome">
        <p>© {new Date().getFullYear()} ورشة الصقر. كل الحقوق محفوظة.</p>
        <p className="font-mono text-xs">صُنع كمشروع تعليمي</p>
      </div>
    </footer>
  )
}
