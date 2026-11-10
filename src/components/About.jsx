import { Droplets, MapPin, Truck, ShieldCheck } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Truck,
      title: 'Water Delivery Solutions',
      description: 'Water supply for residential, commercial and project needs.',
    },
    {
      icon: MapPin,
      title: 'Local Service Area',
      description: 'Serving Majakaneng, Brits and surrounding communities.',
    },
    {
      icon: ShieldCheck,
      title: 'Customer-Focused Service',
      description: 'A commitment to understanding and meeting each customer’s requirements.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-[450px]">
              <img
                src="/images/hero-tanker.jpg"
                alt="Water tanker truck"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Capacity card */}
            <div className="absolute -bottom-7 -right-4 md:right-[-25px] bg-navy text-white p-6 md:p-8 rounded-xl shadow-xl">
              <Droplets size={30} className="text-aqua mb-3" />

              <p className="text-3xl font-extrabold">
                20,000L
              </p>

              <p className="text-slate-300 text-sm mt-1">
                Approximate tanker capacity
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="pt-5 lg:pt-0">
            <span className="text-water uppercase tracking-[3px] text-sm font-bold">
              About Our Business
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mt-4 mb-6">
              Delivering Water.
              <span className="block text-water">
                Supporting Communities.
              </span>
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              Water Supply provides water delivery solutions for residential
              properties, construction sites, agricultural operations and
              businesses.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              Based around the Majakaneng and Brits area, our aim is to make
              water delivery convenient and accessible for customers who
              require an additional water supply at their location.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-sky-50 text-water p-3 rounded-lg">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-navy font-bold mb-1">
                        {item.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-water hover:bg-navy text-white px-8 py-4 rounded-md font-bold mt-9 transition"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
