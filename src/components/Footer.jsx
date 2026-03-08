import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Sparkles, MessageCircle, Instagram, Facebook } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Coverage', href: '#coverage' },
]

const SERVICES = [
  'Wash & Fold',
  'Wash, Dry & Iron',
  'Ihram Specialist',
  'VIP Express',
  'Hotel Pickup',
  'Stain Removal',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1e35] text-white">
      {/* CTA Banner */}
      <div className="bg-gold-gradient py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-1 drop-shadow">
              Ready for Freshly Clean Clothes?
            </h3>
            <p className="text-white/80 text-base">
              Order now — we'll pick up from your hotel in 15 minutes!
            </p>
          </div>
          <WhatsAppButton
            isGeneral
            label="Order on WhatsApp"
            size="lg"
            className="shrink-0 bg-white! text-[#1a3a5c]! border-0! hover:bg-white/90!"
          />
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center shadow-md">
                <Sparkles size={17} className="text-white" />
              </div>
              <div>
                <div className="font-extrabold text-xl text-white leading-tight">Easy Laundry</div>
                <div className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase">Makkah</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              The most trusted laundry service for pilgrims and residents in Makkah Al-Mukarramah.
              Fast, reliable, and handled with care.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
                { icon: Instagram, label: 'Instagram', color: '#e1306c' },
                { icon: Facebook, label: 'Facebook', color: '#1877f2' },
              ].map(({ icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.12 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center no-underline transition-all"
                  style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon size={16} style={{ color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4 text-[#c9a84c]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-[#c9a84c] text-sm transition-colors no-underline flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4 text-[#c9a84c]">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/55 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4 text-[#c9a84c]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">WhatsApp / Call</div>
                  <a
                    href="https://wa.me/8801763257219"
                    className="text-white text-sm font-semibold no-underline hover:text-[#c9a84c] transition-colors"
                  >
                    +880 1763-257219
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Location</div>
                  <span className="text-white text-sm font-medium">Makkah Al-Mukarramah, KSA</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-white/60" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Hours</div>
                  <span className="text-[#25D366] text-sm font-bold">Open 24/7 — Always</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-white/60" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Email</div>
                  <span className="text-white text-sm font-medium">info@easylaundry-makkah.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} Easy Laundry Makkah. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] text-sm font-semibold">24/7 Service Active</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
