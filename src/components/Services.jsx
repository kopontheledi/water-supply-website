
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-water uppercase tracking-[3px] text-sm font-bold">
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mt-4 mb-5">
            Water Solutions for Every Need
          </h2>

          <p className="text-slate-600 leading-7">
            From residential properties to large-scale projects, we provide
            water delivery solutions for a variety of needs across
            Majakaneng, Brits and surrounding areas.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-100"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

                  <div className="absolute bottom-4 left-5 bg-white text-water p-3 rounded-lg shadow-md">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-water transition">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-7 mb-5">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-water font-bold text-sm hover:gap-3 transition-all"
                  >
                    Enquire Now
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-14 bg-navy rounded-xl px-7 py-9 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Need water delivered to your location?
            </h3>
            <p className="text-slate-300">
              Get in touch to discuss your water delivery requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 bg-aqua hover:bg-white text-navy px-7 py-4 rounded-md font-bold transition"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  )
}
