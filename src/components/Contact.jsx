import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Droplets,
} from 'lucide-react'

import QuoteForm from './QuoteForm'

export default function Contact() {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Service Area',
      detail: 'Majakaneng, Brits & surrounding areas',
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      detail: 'Contact number to be confirmed',
    },
    {
      icon: Clock,
      title: 'Delivery Arrangements',
      detail: 'Contact us to discuss availability',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-water uppercase tracking-[3px] text-sm font-bold">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mt-4 mb-5">
            Let's Get Water
            <span className="block text-water">Where You Need It.</span>
          </h2>

          <p className="text-slate-600 leading-7">
            Need water delivered to your home, business or project?
            Send us your requirements and enquire about a delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Contact information */}
          <div className="lg:col-span-2 bg-navy rounded-2xl p-7 md:p-9 text-white">
            <span className="text-aqua uppercase tracking-[3px] text-sm font-bold">
              Contact Information
            </span>

            <h3 className="text-2xl md:text-3xl font-extrabold mt-4 mb-5">
              We're Ready to Help
            </h3>

            <p className="text-slate-300 leading-7 mb-9">
              Tell us where you need water and what you need it for.
              We'll discuss the delivery arrangements with you.
            </p>

            <div className="space-y-7">
              {contactDetails.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/10 text-aqua p-3 rounded-lg">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-300 text-sm leading-6">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 border-t border-white/20 pt-8">
              <div className="flex items-center gap-3 text-aqua mb-3">
                <Droplets size={24} />
                <span className="font-bold">Water Supply</span>
              </div>

              <p className="text-slate-400 text-sm leading-6">
                Water delivery solutions for homes, projects and businesses.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>

        </div>
      </div>
    </section>
  )
}
