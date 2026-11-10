
import {
  Droplets,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const services = [
    'Residential Water Delivery',
    'Construction Water Supply',
    'Swimming Pool Filling',
    'Agricultural Water Supply',
    'Dust Suppression',
    'Commercial & Industrial Supply',
  ]

  return (
    <footer className="bg-[#061F33] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Business identity */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="bg-water p-3 rounded-lg">
                <Droplets size={27} />
              </div>

              <div>
                <h2 className="font-extrabold text-xl">
                  WATER SUPPLY
                </h2>
                <p className="text-aqua text-[10px] tracking-[3px]">
                  WATER DELIVERY SERVICES
                </p>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-7 mb-6">
              Water delivery solutions for residential properties,
              construction sites, farms and businesses.
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <MapPin size={17} className="text-aqua shrink-0" />
              Majakaneng, Brits & surrounding areas
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-aqua text-sm transition flex items-center gap-2"
                  >
                    <ArrowUpRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-aqua text-sm transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>

            <p className="text-slate-400 text-sm leading-7 mb-6">
              Need water delivered? Send us your requirements
              and enquire about availability.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-water hover:bg-aqua hover:text-navy text-white px-5 py-3 rounded-md font-bold text-sm transition"
            >
              Request a Quote
              <ArrowUpRight size={17} />
            </a>

            <div className="mt-7">
              <a
                href="#contact"
                aria-label="WhatsApp enquiry"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-water px-4 py-3 rounded-lg transition"
              >
                <MessageCircle size={20} />
                <span className="text-sm font-semibold">
                  WhatsApp Enquiries
                </span>
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              Contact details to be configured.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-xs text-center">
            © {new Date().getFullYear()} Water Supply. All rights reserved.
          </p>

          <p className="text-slate-400 text-xs text-center">
            Website concept by{' '}
            <a
              href="#"
              className="text-aqua font-bold hover:text-white transition"
            >
              OP Digital Creations
            </a>
          </p>

        </div>
      </div>
    </footer>
  )
}
