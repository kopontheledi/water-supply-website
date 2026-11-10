
import { ArrowRight, Droplets, MapPin, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[700px] flex items-center bg-navy overflow-hidden pt-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage: "url('/images/hero-tanker.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 py-24">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-aqua px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <MapPin size={16} />
            Serving Majakaneng, Brits & Surrounding Areas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-7">
            Reliable Water
            <span className="block text-aqua">When You Need It.</span>
          </h1>

          <p className="text-slate-200 text-lg leading-8 max-w-2xl mb-9">
            Your dependable water delivery partner for homes, construction
            sites, farms and businesses. We bring water directly to your
            location when you need it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-water hover:bg-aqua hover:text-navy text-white px-8 py-4 rounded-md font-bold transition"
            >
              Request Water Delivery
              <ArrowRight size={19} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-white/50 hover:bg-white hover:text-navy text-white px-8 py-4 rounded-md font-bold transition"
            >
              Explore Our Services
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <Truck className="text-aqua" size={27} />
              <div>
                <p className="text-white font-bold">Water Delivery</p>
                <p className="text-slate-300 text-xs">Direct to your location</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Droplets className="text-aqua" size={27} />
              <div>
                <p className="text-white font-bold">Approx. 20,000L</p>
                <p className="text-slate-300 text-xs">Estimated tanker capacity</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
