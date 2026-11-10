
import {
  Truck,
  MapPin,
  Droplets,
  Clock,
  Users,
  CheckCircle2,
} from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Truck,
      title: 'Direct Water Delivery',
      description:
        'Water is transported directly to your property, site or business.',
    },
    {
      icon: MapPin,
      title: 'Local Service Area',
      description:
        'Serving customers in Majakaneng, Brits and surrounding areas.',
    },
    {
      icon: Droplets,
      title: 'Flexible Water Solutions',
      description:
        'Water supply options for residential, agricultural and commercial needs.',
    },
    {
      icon: Clock,
      title: 'Convenient Scheduling',
      description:
        'Discuss a delivery time that suits your location and requirements.',
    },
    {
      icon: Users,
      title: 'Customer-Focused',
      description:
        'We aim to make arranging your water delivery straightforward.',
    },
    {
      icon: CheckCircle2,
      title: 'Multiple Applications',
      description:
        'One water delivery service for homes, construction and business needs.',
    },
  ]

  return (
    <section id="why-us" className="relative bg-navy section-padding overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-water/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-aqua uppercase tracking-[3px] text-sm font-bold">
            Why Work With Us
          </span>

          <h2 className="text-3xl md:text-5xl text-white font-extrabold mt-4 mb-5 leading-tight">
            Water Delivery Made
            <span className="block text-aqua">Simple and Convenient.</span>
          </h2>

          <p className="text-slate-300 leading-8">
            Whether you need water for your home, business or project,
            we aim to provide a convenient delivery experience from
            your first enquiry to delivery at your location.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <div
                key={index}
                className="group border-t border-white/20 pt-7"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 text-aqua mb-5 group-hover:bg-aqua group-hover:text-navy transition duration-300">
                  <Icon size={27} />
                </div>

                <h3 className="text-white text-xl font-bold mb-3">
                  {reason.title}
                </h3>

                <p className="text-slate-400 leading-7 text-sm">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-white/10 border border-white/10 rounded-xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Looking for a water delivery solution?
            </h3>

            <p className="text-slate-300">
              Tell us what you need and where you need it.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-aqua hover:bg-white text-navy px-8 py-4 rounded-md font-bold transition whitespace-nowrap"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  )
}
