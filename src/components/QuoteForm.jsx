import { useState } from 'react'
import { Send, CheckCircle, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '' // Add the owner's number, e.g. 27821234567

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    quantity: '',
    date: '',
    message: '',
  })

  const [notice, setNotice] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setNotice('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!WHATSAPP_NUMBER) {
      setNotice(
        'The business WhatsApp number has not been configured yet. Your enquiry has not been sent.'
      )
      return
    }

    const message = `
WATER DELIVERY ENQUIRY

Name: ${formData.name}
Phone: ${formData.phone}
Delivery Location: ${formData.location}
Service Required: ${formData.service}
Estimated Quantity: ${formData.quantity}
Preferred Date: ${formData.date || 'Flexible'}

Additional Information:
${formData.message || 'None'}
    `

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
      <div className="mb-8">
        <span className="text-water text-sm font-bold uppercase tracking-[3px]">
          Request a Quote
        </span>

        <h3 className="text-2xl md:text-3xl font-extrabold text-navy mt-3 mb-3">
          Tell Us What You Need
        </h3>

        <p className="text-slate-500 leading-7">
          Complete the form below and provide details about your water
          delivery requirements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water focus:ring-2 focus:ring-water/10"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 082 123 4567"
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water focus:ring-2 focus:ring-water/10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Delivery Location *
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Suburb, town or delivery address"
            required
            className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water focus:ring-2 focus:ring-water/10"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Service Required *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water bg-white"
            >
              <option value="">Select a service</option>
              <option value="Residential Water Delivery">Residential Water Delivery</option>
              <option value="Construction Water Supply">Construction Water Supply</option>
              <option value="Swimming Pool Filling">Swimming Pool Filling</option>
              <option value="Agricultural Water Supply">Agricultural Water Supply</option>
              <option value="Dust Suppression">Dust Suppression</option>
              <option value="Commercial & Industrial Supply">Commercial & Industrial Supply</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Estimated Quantity *
            </label>

            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water bg-white"
            >
              <option value="">Select quantity</option>
              <option value="Below 5,000 litres">Below 5,000 litres</option>
              <option value="5,000–10,000 litres">5,000–10,000 litres</option>
              <option value="10,000–20,000 litres">10,000–20,000 litres</option>
              <option value="More than 20,000 litres">More than 20,000 litres</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Preferred Delivery Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Additional Information
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us more about your water delivery requirements..."
            className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-water resize-none"
          />
        </div>

        {notice && (
          <div
            role="alert"
            className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 text-sm"
          >
            {notice}
          </div>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-water hover:bg-navy text-white font-bold py-4 px-6 rounded-lg transition"
        >
          <Send size={19} />
          Submit Enquiry
        </button>

        <p className="text-xs text-slate-400 text-center">
          Your information will be used to respond to your water delivery enquiry.
        </p>
      </form>
    </div>
  )
}
