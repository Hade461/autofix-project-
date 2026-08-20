import engineImg from '../assets/engine.jpg'
import brakesImg from '../assets/brakes.jpg'
import workshopImg from '../assets/workshop.jpg'
import diagnosticsImg from '../assets/diagnostics.jpg'
import electricalImg from '../assets/electrical.jpg'
import tiresImg from '../assets/tires.jpg'

const galleryItems = [
  { label: 'فحص محرك', image: engineImg },
  { label: 'تبديل فرامل', image: brakesImg },
  { label: 'صيانة كهرباء', image: electricalImg },
  { label: 'تركيب إطارات', image: tiresImg },
  { label: 'تشخيص كمبيوتر', image: diagnosticsImg },
  { label: 'ورشة من الداخل', image: workshopImg },
]

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-5 py-20">
      <div className="mb-10">
        <p className="font-mono text-torque text-sm tracking-widest mb-2">شغلنا</p>
        <h2 className="font-display text-3xl font-bold text-bone">لقطات من الورشة</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.label}
            className="aspect-square rounded-lg overflow-hidden border border-white/10"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}